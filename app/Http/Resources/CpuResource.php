<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class CpuResource extends JsonResource
{
  /**
   * Transform the resource into an array.
   *
   * @return array<string, mixed>
   */
  public function toArray(Request $request): array
  {
    return [
      'id'=>$this->id,
      'cpuname' => new AdminCpuResource($this->cpuname),
      'core_count'=>$this->core_count,
      'core_clock'=>$this->core_clock,
      'boost_clock'=>$this->boost_clock,
      'tdp'=>$this->tdp,
      'graphics'=>$this->graphics,
      'price'=>$this->price,
      'tailbar'=>$this->tailbar,
      'image' => $this->image ? Storage::url($this->image) : '',
    ];
  }
}
