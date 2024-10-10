<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class CategoryController extends Controller
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

        $categories = Category::query();

        if (isset($_GET['search']) && $_GET['search']) {
            $search = $_GET['search'];
            $categories = $categories->where('name', 'like', '%' . $search . '%');
        }

        if (isset($_GET['orderby']) && $_GET['orderby']) {
            $orderby = $_GET['orderby'];
            $categories = $categories->orderBy('created_at', $orderby);
        }

        $categories = $categories->paginate($show ?? 10)->appends($_GET);

        return Inertia::render('Admin/Category/Index', ['categories' => $categories]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Category/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // return $request->all();

        $request->validate([
            'name' => 'required|unique:categories',
        ]);

        $data=[
            'name'=> $request->name,
            'slug'=> Str::slug($request->name),
            'description'=> $request->description,
            'user_id'=> Auth::user()->id,
        ];
        if ($request->file('thumbnail')) {
            $file_name = $request->file('thumbnail')->store('category');
            $data['thumbnail'] = $file_name;
        }
        if ($request->file('icon')) {
            $file_name = $request->file('icon')->store('category/icon');
            $data['icon'] = $file_name;
        }

        Category::create($data);

        return to_route('category.index');
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
        $category = Category::where('id', $id)->first();
        return Inertia::render('Admin/Category/Edit', ['category'=>$category]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
           'name' => 'required|unique:categories,name,' . $id
        ]);

        $data = [
            'name'=> $request->name,
            'slug'=> Str::slug($request->name),
            'description'=> $request->description,
            'user_id'=> Auth::user()->id,
        ];

        $category = Category::firstwhere('id', $id);
        if ($request->file('thumbnail')) {
            if ($category->thumbnail != null && Storage::exists($category->thumbnail)) {
                Storage::delete($category->thumbnail);
            }

            $file_name = $request->file('thumbnail')->store('category');
            $data['thumbnail'] = $file_name;
        }
        if ($request->file('icon')) {
            if ($category->icon != null && Storage::exists($category->icon)) {
                Storage::delete($category->icon);
            }

            $file_name = $request->file('icon')->store('category/icon');
            $data['icon'] = $file_name;
        }


        Category::firstwhere('id', $id)->update($data);
        return to_route('category.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Category::where('id', $id)->delete();
        return redirect()->route('category.index');
    }
}
