<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class DulgnController extends Controller
{
    public function register(Request $request) {
        $NewFields = $request-> validate([
            'name' => ['required', Rule::unique('users', 'name')],
            'email' => ['required', Rule::unique('users', 'email')],
            'password' => 'required'
        ]);

        $NewFields['password'] = bcrypt($NewFields['password']);
        $UserData = User::create($NewFields);
        auth()->login($UserData);
        return redirect('/home');
    }

    public function login(Request $request) {
        $NewFields = $request-> validate([
            'loginname' => 'required',
            'loginpassword' => 'required'
        ]);

        if (auth()->attempt(['name' => $NewFields['loginname'], 'password' => $NewFields['loginpassword']])) {
            $request->session()->regenerate();
        }

        return redirect('/home');
    }

    public function logout() {
        auth()->logout();
        return redirect('/home');
    }
    
}
