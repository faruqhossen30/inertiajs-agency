<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TermsandConditionsController extends Controller
{
    public function termsandConditions()
    {

        return inertia('TermsandConditions');
    }
}
