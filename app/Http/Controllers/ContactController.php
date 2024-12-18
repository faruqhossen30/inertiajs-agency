<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ContactController extends Controller
{
    function index(): Response
    {
        return Inertia::render('ContactPage');
    }
    function calendy(): Response
    {
        return Inertia::render('CalandyPage');
    }
}
