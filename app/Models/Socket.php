<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Socket extends Model
{
    use HasFactory;

    protected $fillable = [
      'socket_name'
  ];

  public function user(): BelongsTo
  {
    return $this->belongsTo(User::class);
  }

  public function mobos_rel(): HasMany
  {
    return $this->hasMany(ProductMobo::class);
  }
}
