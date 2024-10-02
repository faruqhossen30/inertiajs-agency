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
        $features = Feature::where('is_additional', false)->with('category')->orderBy('category_id')->get();
        $service = Service::with(['features', 'items'])->firstWhere('id', $id);
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

        return to_route('service.faq.create', $id);
    }

    public function additionalFeatureCreate(Request $request, $id)
    {
        $features = Feature::where('is_additional', true)->get();
        $service = Service::with(['features','additionalFeatures', 'items'])->firstWhere('id', $id);

        $additionalfeatures = ServiceFeature::with('feature')->where(['service_id'=>$id, 'is_additional'=>true])->get();

        // return  $additionalfeatures;
        return Inertia::render('Admin/ServiceFeature/AdditionalFeature', ['features' => $features, 'service' => $service,'additionalfeatures'=>$additionalfeatures]);
    }

    public function additionalFeatureStore(Request $request, string $id)
    {
        $request->validate([
            'feature_id' => 'required',
            'basic'      => 'required',
            'standard'   => 'required',
            'premium'    => 'required',
        ]);

        ServiceFeature::create([
            'service_id' => $id,
            'feature_id' => $request->feature_id,
            'basic'      => $request->basic,
            'standard'   => $request->standard,
            'premium'    => $request->premium,
            'is_additional'    => true,
        ]);

        return redirect()->back();
    }
    public function additionalFeatureStoreDestroy(string $id)
    {
        ServiceFeature::firstWhere('id',$id)->delete();
        return redirect()->back();
    }
}
