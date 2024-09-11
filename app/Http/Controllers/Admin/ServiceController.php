<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Blog\Blog;
use App\Models\Category;
use App\Models\Package;
use App\Models\Service\Service;
use App\Models\Service\ServiceCategory;
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
        $packages   = Package::get();
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
            'title'          => 'required',
            'thumbnail'      => 'required | mimes:jpeg,jpg,png | max:1000',
            'description'    => 'required',
            'basic_price'    => 'required | numeric',
            'standard_price' => 'required | numeric',
            'premium_price'  => 'required | numeric',
            'status'         => 'required',
            'category_ids'   => 'required',
        ]);

        $data = [
            'title'             => $request->title,
            'slug'              => Str::slug($request->title),
            'short_description' => $request->short_description,
            'description_code'  => $request->description_code,
            'description'       => $request->description,
            'status'            => $request->status,
            'basic_price'       => $request->basic_price,
            'standard_price'    => $request->standard_price,
            'premium_price'     => $request->premium_price,
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
        $service = Service::where('id', $id)->first();
        $categories = Category::get();
        $selectedCategories = $service->categories;

        // return  $selectedCategories;
        return Inertia::render('Admin/Service/Edit', ['service' => $service, 'categories' => $categories,  'selectedCategories' => $selectedCategories,]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'title'          => 'required',
            'thumbnail'      => 'required | mimes:jpeg,jpg,png | max:1000',
            'description'    => 'required',
            'basic_price'    => 'required | numeric',
            'standard_price' => 'required | numeric',
            'premium_price'  => 'required | numeric',
            'status'         => 'required',
            'category_ids'   => 'required',
        ]);

        $data = [
            'title'             => $request->title,
            'slug'              => Str::slug($request->title),
            'short_description' => $request->short_description,
            'description_code'  => $request->description_code,
            'description'       => $request->description,
            'basic_price'       => $request->basic_price,
            'standard_price'    => $request->standard_price,
            'premium_price'     => $request->premium_price,
        ];

        if ($request->file('thumbnail')) {
            $file_name = $request->file('thumbnail')->store('thumbnail/service');
            $data['thumbnail'] = $file_name;
        }

        $service = Service::firstwhere('id', $id)->update($data);

        if ($request->has('category_ids')) {
            $service = Service::find($id);
            $service->categories()->sync($request->category_ids);
        }

        return to_route('service.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Service::where('id', $id)->delete();
        return redirect()->route('service.index')->with('warning', 'The service has been deleted successfully!');
        // Display a success toast with no title
        flash()->success('Operation completed successfully.');
    }
}
