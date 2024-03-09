<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MoBo extends Model
{
  use HasFactory;

  protected $fillable = [
    'mobo_name',
    'mobo_socket'
  ];

}
