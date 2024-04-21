<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ProductRam extends Model
{
  use HasFactory;

  protected $fillable = [
    'name',
    'gen',
    'speed',
    'modules',
    'color',
    'price',
    'image',
    'phone'
  ];

  public function user(): BelongsTo
  {
    return $this->belongsTo(User::class);
  }

  public function genInfo(): BelongsTo
  {
    return $this->belongsTo(Memory::class, 'gen');
  }
}
