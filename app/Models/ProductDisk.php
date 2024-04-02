<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ProductDisk extends Model
{
  use HasFactory;

  protected $fillable = [
    'name',
    'capacity',
    'type',
    'cache',
    'interface',
    'price',
    'image'
  ];

  public function user(): BelongsTo
    {
      return $this->belongsTo(User::class);
    }
}
