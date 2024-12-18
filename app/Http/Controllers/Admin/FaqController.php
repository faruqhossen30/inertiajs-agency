<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Faq;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FaqController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $show = null;
        if (isset($_GET['show']) && $_GET['show']) {
            $show = $_GET['show'];
        }

        $faqs = Faq::query();

        if (isset($_GET['search']) && $_GET['search']) {
            $search = $_GET['search'];
            $faqs = $faqs->where('title', 'like', '%' . $search . '%');
        }

        if (isset($_GET['orderby']) && $_GET['orderby']) {
            $orderby = $_GET['orderby'];
            $faqs = $faqs->orderBy('created_at', $orderby);
        }

        $faqs = $faqs->paginate($show ?? 10)->appends($_GET);

        return Inertia::render('Admin/Faq/Index', ['faqs' => $faqs]);
    }


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

        return Inertia::render('Admin/Faq/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([

            'title' => 'required'
        ]);

        $data = [
            'title'        => $request->title,
            'description' => $request->description,
            'status'      => $request->status,
        ];
        Faq::create($data);

        return to_route('faq.index');
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
        $faq = Faq::where('id', $id)->first();
        return Inertia::render('Admin/Faq/Edit', ['faq' => $faq]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
           'title' => 'required'
        ]);

        $data = [
            'title'       => $request->title,
            'description' => $request->description,
            'status'      => $request->status,
        ];

        Faq::firstwhere('id', $id)->update($data);
        return to_route('faq.index'); //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Faq::where('id', $id)->delete();
        return redirect()->route('faq.index');
    }
}
