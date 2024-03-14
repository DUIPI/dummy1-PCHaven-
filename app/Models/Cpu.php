<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Cpu extends Model
{
  use HasFactory;

  protected $fillable = [
    'cpu_name',
    'cpu_socket',
  ];

  public function user(): BelongsTo
  {
    return $this->belongsTo(User::class);
  }
}
