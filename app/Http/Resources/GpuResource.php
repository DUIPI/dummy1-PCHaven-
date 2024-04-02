<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class GpuResource extends JsonResource
{
  /**
   * Transform the resource into an array.
   *
   * @return array<string, mixed>
   */
  public function toArray(Request $request): array
  {
    return [
      'id' => $this->id,
      'user_id' => $this->user_id,
      'name' => $this->name,
      'chipset' => $this->chipset,
      'memory' => $this->memory,
      'c_clock' => $this->c_clock,
      'b_clock' => $this->b_clock,
      'color' => $this->color,
      'length' => $this->length,
      'price' => $this->price,
      'image' => $this->image ? Storage::url($this->image) : '',
    ];
  }
}
