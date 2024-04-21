<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ProductGpu extends Model
{
  use HasFactory;

  protected $fillable = [
    'name',
    'chipset',
    'memory',
    'c_clock',
    'b_clock',
    'color',
    'length',
    'price',
    'image',
    'phone'
  ];

  public function user(): BelongsTo
  {
    return $this->belongsTo(User::class);
  }
}
