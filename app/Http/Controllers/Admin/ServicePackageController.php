<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Service\Service;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ServicePackageController extends Controller
{
    public function packageCreate(Request $request, $id){
        $service = Service::firstWhere('id', $id);
        return Inertia::render('Admin/Service/PackageCreate', ['service' => $service]);
    }

    public function packageStore(Request $request, $id){

        $request->validate([
            // Price
            'basic_price' => 'required',
            'standard_price' => 'required',
            'premium_price' => 'required',
            // Day
            'basic_day' => 'required',
            'standard_day' => 'required',
            'premium_day' => 'required',
        ]);

        $data = [
            'basic_price' => $request->basic_price,
            'standard_price' => $request->standard_price,
            'premium_price' => $request->premium_price,

            'basic_day' => $request->basic_day,
            'standard_day' => $request->standard_day,
            'premium_day' => $request->premium_day,

            'basic_description' => $request->basic_description,
            'standard_description' => $request->standard_description,
            'premium_description' => $request->premium_description,
        ];

        Service::firstWhere('id', $id)->update($data);

        return to_route('service.feature.create', $id);
        // $service = Service::firstWhere('id', $id);

        // return $service;

        // return Inertia::render('Admin/Service/PackageCreate', ['service' => $service]);
    }
}
