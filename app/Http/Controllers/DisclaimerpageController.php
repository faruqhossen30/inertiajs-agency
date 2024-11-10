<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DisclaimerpageController extends Controller
{
   public function disclaimerpage(){

    return inertia('Disclaimer');
   }
}
