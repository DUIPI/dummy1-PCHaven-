<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ProductPsu extends Model
{
  use HasFactory;

  protected $fillable = [
    'name',
    'buteemj',
    'watt',
    'modular',
    'color',
    'price',
    'image',
    'phone'
  ];

  public function user(): BelongsTo
  {
    return $this->belongsTo(User::class);
  }
}
