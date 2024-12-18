<?php

namespace App\Http\Controllers;

use App\Models\Service\Service;
use App\Models\Service\ServiceFaq;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;

class ServicepageController extends Controller
{
    function index(Request $request)
    {

        $show = null;
        if (isset($_GET['show']) && $_GET['show']) {
            $show = $_GET['show'];
        }

        $services = Service::query();

        if (isset($_GET['category']) && $_GET['category']) {
            $category = $_GET['category'];
            $services = $services->whereHas('categories', function ($q) use ($category) {
                return $q->where('category_id', $category);
            });
        }

        if (isset($_GET['search']) && $_GET['search']) {
            $search = $_GET['search'];
            $services = $services->where('title', 'like', '%' . $search . '%');
        }

        if (isset($_GET['orderby']) && $_GET['orderby']) {
            $orderby = $_GET['orderby'];
            $services = $services->orderBy('created_at', $orderby);
        }

        $services = $services->with('reviews')->paginate($show ?? 9)->appends($_GET);

        return Inertia::render('ServicePage', ['services' => $services, 'request' => $_GET]);
    }

    function SingleService($slug)
    {
        $service = Service::with(['items.feature','reviews.users','faqs'])->firstWhere('slug', $slug);
        // $service = Service::with('reviews')->firstWhere('slug', $slug);
        // return $service;
        return Inertia::render('SingleService', ['service' => $service]);
    }
}
