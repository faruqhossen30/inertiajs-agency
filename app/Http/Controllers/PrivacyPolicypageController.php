<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PrivacyPolicypageController extends Controller
{
    public function PrivacyPolicy(){

        return inertia('PrivacyPolicy');
    }
}
