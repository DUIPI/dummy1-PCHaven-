<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ProductCpu extends Model
{
    use HasFactory;

    protected $fillable = [
      'p_cpu_name',
      'core_count',
      'core_clock',
      'boost_clock',
      'tdp',
      'int_graphics',
      'p_cpu_price',
      'cpu_tailbar',
      'image'
    ];
  
    public function user(): BelongsTo
    {
      return $this->belongsTo(User::class);
    }
}
