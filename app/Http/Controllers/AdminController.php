<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Socket;
use Illuminate\Validation\Rule;

class AdminController extends Controller
{
    public function createSocket(Request $request){
      $AdminField = $request->validate([
        'socket_name' => ['required', Rule::unique('sockets', 'socket_name')]
      ]);

      Socket::create($AdminField);

      return redirect('masterside');
    }
}
