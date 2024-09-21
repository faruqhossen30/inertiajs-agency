<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Feature;
use App\Models\Service\Service;
use App\Models\Service\ServiceFeature;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ServiceFeatureController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request, $id)
    {
        $features = Feature::with('category')->orderBy('category_id')->get();
        $service = Service::with('features')->firstWhere('id', $id);
        // return  $service;
        return Inertia::render('Admin/ServiceFeature/Create', ['features' => $features, 'service' => $service]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, $id)
    {
        // return $request->all();
        $features = $request->featureids;
        $basic = $request->basic;
        $standard = $request->standard;
        $premium = $request->premium;

        if (!empty($features)) {
            $service = ServiceFeature::where('service_id', $id)->delete();
            foreach ($features as $key => $featue) {
                $b = in_array($featue, $basic);
                $s = in_array($featue, $standard);
                $p = in_array($featue, $premium);

                ServiceFeature::create([
                    'service_id' => $id,
                    'feature_id' => $featue,
                    'basic'      => $b,
                    'standard'   => $s,
                    'premium'    => $p
                ]);
            }
        }

        return to_route('service.index');
    }



}
