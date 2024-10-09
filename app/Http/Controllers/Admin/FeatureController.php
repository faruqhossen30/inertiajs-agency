<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Feature;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FeatureController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $features = Feature::with('category')->paginate(10);
        // return $features;
        return Inertia::render('Admin/Feature/Index', ['features' => $features]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = Category::get();
        return Inertia::render('Admin/Feature/Create', ['categories' => $categories]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
           'title' => 'required|unique:features'
        ]);

        $data = [
            'category_id' => $request->category_id,
            'title'       => $request->title,
            'is_additional'       => $request->is_additional,
        ];
        Feature::create($data);

        return to_route('feature.index');
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
        $categories = Category::get();
        $feature = Feature::where('id', $id)->first();
        return Inertia::render('Admin/Feature/Edit', ['feature' => $feature, 'categories' => $categories]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'title' => 'required|unique:features'
        ]);

        $data = [
            'category_id' => $request->category_id,
            'title'       => $request->title,
            'is_additional'       => $request->is_additional,
        ];

        Feature::firstwhere('id', $id)->update($data);
        return to_route('feature.index'); //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Feature::where('id', $id)->delete();
        return redirect()->route('feature.index');
    }
}
