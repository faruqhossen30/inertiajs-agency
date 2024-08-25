<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Review;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class HomepageController extends Controller
{
    function index() : Response {
        $categories = Category::get();
        $reviews = Review::get();
        return Inertia::render('HomePage', ['categories'=>$categories,'reviews'=>$reviews]);
    }
}
