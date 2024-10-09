<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Review;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
class ReviewController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $reviews = Review::paginate(10);
        // return $categories;
        return Inertia::render('Admin/Review/Index',['reviews'=> $reviews]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Review/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // return $request->all();

        $request->validate([
            'name' => 'required|unique:reviews',
        ]);

        $data=[
            'name'        => $request->name,
            'designation' => $request->designation,
            'review'      => $request->review,
            'rating'      => $request->rating,
            'date'        => $request->date,
        ];
        if ($request->file('thumbnail')) {
            $file_name = $request->file('thumbnail')->store('review');
            $data['thumbnail'] = $file_name;
        }

        Review::create($data);

        return to_route('review.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $review = Review::where('id', $id)->first();

        return Inertia::render('Admin/Review/Edit', ['review'=>$review]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'name' => 'required',
        ]);

        $data = [
            'name'        => $request->name,
            'designation' => $request->designation,
            'review'      => $request->review,
            'rating'      => $request->rating,
            'date'        => $request->date,
        ];

        $review = Review::firstwhere('id', $id);
        if ($request->file('thumbnail')) {
            if ($review->thumbnail != null && Storage::exists($review->thumbnail)) {
                Storage::delete($review->thumbnail);
            }

            $file_name = $request->file('thumbnail')->store('review');
            $data['thumbnail'] = $file_name;
        }


        Review::firstwhere('id', $id)->update($data);
        return to_route('review.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Review::where('id', $id)->delete();
        return redirect()->route('review.index');
    }

}
