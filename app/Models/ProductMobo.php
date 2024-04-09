<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ProductMobo extends Model
{
  use HasFactory;

  protected $fillable = [
    'name',
    'socket',
    'hemjee',
    'memory_max',
    'memory_slot',
    'color',
    'price',
    'image'
  ];

  public function user(): BelongsTo
  {
    return $this->belongsTo(User::class);
  }

  public function socket_rel(): BelongsTo
  {
    return $this->belongsTo(Socket::class, 'socket');
  }
}
