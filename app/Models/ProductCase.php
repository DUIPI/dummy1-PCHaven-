<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ProductCase extends Model
{
  use HasFactory;

  protected $fillable = [
    'name',
    'type',
    'color',
    's_panel',
    'price',
    'image',
    'phone'
  ];

  public function user(): BelongsTo
  {
    return $this->belongsTo(User::class);
  }
}
