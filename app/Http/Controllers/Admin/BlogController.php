<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Blog\Blog;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;

class BlogController extends Controller
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

        $blogs = Blog::query();

        if (isset($_GET['search']) && $_GET['search']) {
            $search = $_GET['search'];
            $portfolios = $blogs->where('title', 'like', '%' . $search . '%');
        }

        if (isset($_GET['orderby']) && $_GET['orderby']) {
            $orderby = $_GET['orderby'];
            $portfolios = $blogs->orderBy('created_at', $orderby);
        }

        $blogs = $blogs->paginate($show ?? 10)->appends($_GET);


        return Inertia::render('Admin/Blog/Index', ['blogs' => $blogs]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = Category::get();
        return Inertia::render('Admin/Blog/Create', ['categories' => $categories]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'description' => 'required',
        ]);

        $data = [
            'title' => $request->title,
            'slug' => Str::slug($request->title),
            'description' => $request->description,
        ];
        if ($request->file('thumbnail')) {
            $file_name = $request->file('thumbnail')->store('blogs');
            $data['thumbnail'] = $file_name;
        }

        $service = Blog::create($data);
        $service->categories()->attach($request->category_ids);

        return to_route('blogs.index');
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
        $blog = Blog::firstWhere('id', $id);
        $categories = Category::get();
        return Inertia::render('Admin/Blog/Edit', ['blog' => $blog, 'categories' => $categories]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'title' => 'required',
            'description' => 'required',
        ]);

        $data = [
            'title' => $request->title,
            'slug' => Str::slug($request->title),
            'description' => $request->description,
        ];
        if ($request->file('thumbnail')) {
            $file_name = $request->file('thumbnail')->store('blogs');
            $data['thumbnail'] = $file_name;
        }

        $blog = Blog::firstWhere('id', $id);
        $blog->update($data);
        $blog->categories()->detach();
        $blog->categories()->attach($request->category_ids);

        return to_route('blogs.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Blog::where('id', $id)->delete();
        return redirect()->route('blogs.index');
    }
}
