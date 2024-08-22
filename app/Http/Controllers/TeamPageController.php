<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class TeamPageController extends Controller
{
    function teamPage() : Response {
        return Inertia::render('TeamPage');
    }
}
