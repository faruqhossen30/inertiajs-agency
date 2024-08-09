<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Blog\Blog;
use App\Models\Category;
use App\Models\Package;
use App\Models\Service\Service;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;

class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $services = Service::paginate(10);
        return Inertia::render('Admin/Service/Index', ['services' => $services]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $packages = Package::get();
        $categories = Category::get();
        return Inertia::render('Admin/Service/Create', ['packages' => $packages, 'categories' => $categories]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // return $request->all();
        $request->validate([
            'title' => 'required',
            'description' => 'required',
        ]);

        $data = [
            'title' => $request->title,
            'slug' => Str::slug($request->name),
            'short_description' => $request->short_description,
            'description_code' => $request->description_code,
            'description' => $request->description,
        ];
        if ($request->file('thumbnail')) {
            $file_name = $request->file('thumbnail')->store('service');
            $data['thumbnail'] = $file_name;
        }

        $service = Service::create($data);
        $service->categories()->attach($request->category_ids);

        return to_route('service.index');
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

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
