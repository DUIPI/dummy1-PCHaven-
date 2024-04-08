<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

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

  public function user(): BelongsTo
  {
    return $this->belongsTo(User::class);
  }

  public function rams(): HasMany
  {
    return $this->hasMany(ProductRam::class);
  }
}
