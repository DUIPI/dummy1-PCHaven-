<?php

namespace App\Http\Controllers;

use App\Models\Socket;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class AdminController extends Controller
{
  //showing socket data on the Adminside

  public function index():Response
  {
    return Inertia::render('Adminside', [
      'sockets' => Socket::with('user:id,name')->latest()->get()
    ]);
  }

  //inserting socket data from the Adminside

  public function store(Request $req): RedirectResponse
  {
    $addSocket = $req->validate([
      'socket_name' => 'required|string|max:64',
    ]);

    $req->user()->userSockets()->create($addSocket);

    return redirect(route('masterside.index'));
  }
}
