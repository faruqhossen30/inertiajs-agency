<?php

namespace App\Http\Controllers;

use App\Models\Service\Service;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrderController extends Controller
{
    public function order($id)
    {
        $service = Service::firstWhere('id', $id);
        return   $service;
        return Inertia::render('Order',['service'=>$service]);
    }
}
