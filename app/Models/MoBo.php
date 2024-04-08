<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class MoBo extends Model
{
  use HasFactory;

  protected $fillable = [
    'mobo_name',
    'mobo_socket'
  ];

  public function user(): BelongsTo
  {
    return $this->belongsTo(User::class);
  }

  public function mobos(): HasMany
  {
    return $this->hasMany(ProductMobo::class);
  }
}
