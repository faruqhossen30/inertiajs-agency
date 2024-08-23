<?php

namespace App\Http\Controllers;

use App\Models\Blog\Blog;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class BlogpageController extends Controller
{
    function index() : Response {
        $show = null;
        if (isset($_GET['show']) && $_GET['show']) {
            $show = $_GET['show'];
        }

        $blogs = Blog::query();

        if (isset($_GET['category']) && $_GET['category']) {
            $category = $_GET['category'];
            $blogs = $blogs->whereHas('categories', function ($q) use ($category) {
                return $q->where('category_id', $category);
            });
        }

        if (isset($_GET['search']) && $_GET['search']) {
            $search = $_GET['search'];
            $blogs = $blogs->where('title', 'like', '%' . $search . '%');
        }

        if (isset($_GET['orderby']) && $_GET['orderby']) {
            $orderby = $_GET['orderby'];
            $blogs = $blogs->orderBy('created_at', $orderby);
        }

        $blogs = $blogs->paginate($show ?? 10)->appends($_GET);

        return Inertia::render('BlogPage', ['blogs'=>$blogs]);
    }
    function singleBlog() : Response {
        return Inertia::render('SingleBlog');
    }
}
