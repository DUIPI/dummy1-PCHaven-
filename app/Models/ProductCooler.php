<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ProductCooler extends Model
{
    use HasFactory;
    
    protected $fillable=[
      'cooler_name',
      'fan_rpm',
      'noice_lvl',
      'cooler_color',
      'cooler_size',
      'cooler_price'
    ];

    public function user(): BelongsTo
    {
      return $this->belongsTo(User::class);
    }
}
