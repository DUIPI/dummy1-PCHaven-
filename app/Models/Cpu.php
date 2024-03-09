<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cpu extends Model
{
  use HasFactory;

  protected $fillable = [
    'cpu_name',
    'cpu_socket',
  ];

}


