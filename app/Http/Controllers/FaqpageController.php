<?php

namespace App\Http\Controllers;

use App\Models\faq;
use Illuminate\Http\Request;
use Inertia\Inertia;
class FaqpageController extends Controller
{
    public function index()  {

        $faqs = faq::get();
        return Inertia::render('FaqPage',['faqs'=>$faqs]);
    }
}
