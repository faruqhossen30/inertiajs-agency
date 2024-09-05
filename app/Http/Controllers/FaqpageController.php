<?php

namespace App\Http\Controllers;

use App\Models\Faq;
use Illuminate\Http\Request;
use Inertia\Inertia;
class FaqpageController extends Controller
{
    public function index()  {

        $faqs = Faq::get();
        return Inertia::render('FaqPage',['faqs'=>$faqs]);
    }
}
