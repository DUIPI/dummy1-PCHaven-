<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ProductCpu extends Model
{
    use HasFactory;

    protected $fillable = [
      'name',
      'core_count',
      'core_clock',
      'boost_clock',
      'tdp',
      'graphics',
      'price',
      'tailbar',
      'image'
    ];
  
    public function user(): BelongsTo
    {
      return $this->belongsTo(User::class);
    }

    public function cpuName():  BelongsTo
    {
      return $this->belongsTo(Cpu::class, 'name');
    }
}
