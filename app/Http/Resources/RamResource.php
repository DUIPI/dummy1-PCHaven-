<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class RamResource extends JsonResource
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
      'name'=>$this->name,
      'genInfo'=> new AdminRamResource($this->genInfo),
      'speed'=>$this->speed,
      'modules'=>$this->modules,
      'color'=>$this->color,
      'price'=>$this->price,
      'image' => $this->image ? Storage::url($this->image) : '',
    ];
  }
}
