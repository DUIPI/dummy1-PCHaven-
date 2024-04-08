<?php

namespace App\Http\Controllers;

use App\Models\Cpu;
use App\Models\Socket;
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

  public function storeSocket(Request $req)
  {
    $addSocket = $req->validate([
      'socket_name' => 'required|string|max:64|unique:sockets,socket_name',
    ]);
    $req->user()->userSockets()->create($addSocket);

    return to_route('masterside.index');
  }

  public function storeCpu(Request $req)
  {
    $addCPU = $req->validate([
      'cpu_name' => 'required|string|max:64|unique:cpus,cpu_name',
      'cpu_socket' => 'required',
    ]);
    $req->user()->userCPU()->create($addCPU);

    return to_route('masterside.index');
  }

  public function storeRam(Request $req)
  {
    $addRam = $req->validate([
      'memory_gen' => 'required|string|unique:memories,memory_gen',
      'mem_socket' => 'required',
      'mem_socket1' => 'nullable',
      'mem_socket2' => 'nullable',
      'mem_socket3' => 'nullable',
    ]);

    $req->user()->userRam()->create($addRam);

    return to_route('masterside.index');
  }

  public function storeMobo(Request $req)
  {
    $addMobo = $req->validate([
      'mobo_name' => 'required',
      'mobo_socket' => 'required'
    ]);

    $req->user()->userMobo()->create($addMobo);

    return to_route('masterside.index');
  }
}
