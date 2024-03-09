<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Memory extends Model
{
    use HasFactory;

    protected $fillable = [
      'memory_gen',
      'mem_socket',
      'mem_socket1',
      'mem_socket2',
      'mem_socket3'
  ];

}