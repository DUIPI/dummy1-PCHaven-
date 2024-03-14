<?php

namespace App\Http\Controllers;

use App\Models\Cpu;
use App\Models\Socket;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class AdminController extends Controller
{
  //showing socket data on the Adminside

  public function index(): Response
  {
    return Inertia::render('Adminside', [
      'sockets' => Socket::with('user:id,name')->latest()->get(),
      'cpus' => Cpu::with('user:id,name')->latest()->get(),
    ]);
  }

  //inserting socket data from the Adminside

  public function storeSocket(Request $req): RedirectResponse
  {
    $addSocket = $req->validate([
      'socket_name' => 'required|string|max:64|unique:sockets,socket_name',
    ]);
    $req->user()->userSockets()->create($addSocket);

    return redirect(route('masterside.index'));
  }

  public function storeCpu(Request $req): RedirectResponse
  {
    $addCPU = $req->validate([
      'cpu_name' => 'required|string|max:64|unique:cpus,cpu_name',
      'cpu_socket' => 'required',
    ]);
    $req->user()->userCPU()->create($addCPU);

    return redirect(route('masterside.index'));
  }
}
