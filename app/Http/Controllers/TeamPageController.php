<?php

namespace App\Http\Controllers;

use App\Models\Team;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class TeamPageController extends Controller
{
    function teamPage() : Response {

        $teams = Team::all();
        return Inertia::render('TeamPage',[ 'teams' => $teams]);
    }
}
