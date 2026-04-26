'use client';

import { useState, useMemo } from 'react';
import { Play, Pause, Star, Heart, Mic, Volume2, CheckCheck } from 'lucide-react';
import { reviewsData } from '@/data/reviews';

interface VoiceNoteReview {
  id: string;
  author: string;
  avatar: string;
  location: string;
  rating: number;
  title: string;
  text: string;
  duration: string;
  waveform: number[];
  likes: number;
  isVerified: boolean;
  category: string;
  date: string;
}

function seededRandom(seed: string, min: number, max: number): number {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = ((hash << 5) - hash) + seed.charCodeAt(i);
    hash |= 0;
  }
  const normalized = (Math.abs(hash) % 1000) / 1000;
  return Math.floor(normalized * (max - min + 1)) + min;
}

function generateWaveform(seed: string): number[] {
  const arr: number[] = [];
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = ((hash << 5) - hash) + seed.charCodeAt(i);
    hash |= 0;
  }
  for (let i = 0; i < 40; i++) {
    const val = Math.abs(Math.sin(hash + i * 0.7) * 100);
    arr.push(Math.max(8, Math.min(48, val)));
  }
  return arr;
}

function mapToVoiceNotes(): VoiceNoteReview[] {
  return reviewsData.map((review) => ({
    id: review.id,
    author: review.author,
    avatar: review.author.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase(),
    location: review.location,
    rating: review.rating,
    title: review.title,
    text: review.content,
    duration: `${seededRandom(review.id + 'dur', 15, 55)}s`,
    waveform: generateWaveform(review.id + review.author),
    likes: review.likes || seededRandom(review.id + 'likes', 30, 230),
    isVerified: review.isVerified,
    category: review.category,
    date: review.date,
  }));
}

export function ReviewVoiceNotes() {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [likedIds, setLikedIds] = useState<Set<string>>(new Set());

  const voiceNotes = useMemo(() => mapToVoiceNotes(), []);

  const togglePlay = (id: string) => {
    setPlayingId((prev) => (prev === id ? null : id));
  };

  const toggleLike = (id: string) => {
    setLikedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <section className="mx-auto max-w-[1600px] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <div className="text-xs uppercase tracking-[0.35em] text-[#9a7156]">Voice Notes</div>
        <h2 className="mt-2 text-3xl font-semibold text-[#1f1612]">Reviews you can almost hear.</h2>
        <p className="mt-2 text-sm text-[#6a5448]">
          A chat-style feed where every review feels like a voice message from a friend.
        </p>
      </div>

      <div className="mx-auto max-w-3xl space-y-6">
        {voiceNotes.map((note, index) => {
          const isPlaying = playingId === note.id;
          const isLiked = likedIds.has(note.id);
          const isEven = index % 2 === 0;

          return (
            <div
              key={note.id}
              className={`flex gap-4 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
            >
              {/* Avatar */}
              <div className="flex shrink-0 flex-col items-center gap-1">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl text-sm font-bold ${
                    isEven
                      ? 'bg-gradient-to-br from-[#2a1a14] to-[#8d4f22] text-white'
                      : 'bg-gradient-to-br from-[#c78f56] to-[#f2c57e] text-[#261813]'
                  }`}
                >
                  {note.avatar}
                </div>
                <span className="text-[10px] text-[#9a7156]">{note.duration}</span>
              </div>

              {/* Bubble */}
              <div
                className={`relative max-w-[80%] rounded-[1.5rem] p-5 shadow-[0_8px_24px_rgba(59,35,22,0.08)] ${
                  isEven
                    ? 'rounded-tl-none bg-white'
                    : 'rounded-tr-none bg-gradient-to-br from-[#261813] to-[#9d531c] text-white'
                }`}
              >
                {/* Header */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold">{note.author}</span>
                    {note.isVerified && (
                      <CheckCheck className={`h-3.5 w-3.5 ${isEven ? 'text-[#0fbf78]' : 'text-[#f2c57e]'}`} />
                    )}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className={`h-3 w-3 ${isEven ? 'fill-[#ffb000] text-[#ffb000]' : 'fill-[#f2c57e] text-[#f2c57e]'}`} />
                    <span className="text-xs">{note.rating}</span>
                  </div>
                </div>

                <div className={`mt-1 text-xs ${isEven ? 'text-[#8a7368]' : 'text-white/60'}`}>
                  {note.location} &middot; {note.date}
                </div>

                {/* Voice Waveform */}
                <div className="mt-4 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => togglePlay(note.id)}
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition ${
                      isEven
                        ? 'bg-[#f8efe7] text-[#9d531c] hover:bg-[#f2e4d4]'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 pl-0.5" />}
                  </button>

                  <div className="flex flex-1 items-center gap-[3px]">
                    {note.waveform.map((height, i) => (
                      <div
                        key={i}
                        className={`w-[3px] rounded-full transition-all duration-300 ${
                          isPlaying && i < 20
                            ? isEven
                              ? 'bg-[#c78f56]'
                              : 'bg-[#f2c57e]'
                            : isEven
                            ? 'bg-[#e9ddd2]'
                            : 'bg-white/30'
                        }`}
                        style={{
                          height: `${height}px`,
                          opacity: isPlaying ? 1 - Math.abs(i - 20) / 40 : 0.6,
                        }}
                      />
                    ))}
                  </div>

                  <Mic className={`h-4 w-4 ${isEven ? 'text-[#9a7156]' : 'text-white/50'}`} />
                </div>

                {/* Transcript */}
                <p className={`mt-4 text-sm leading-6 ${isEven ? 'text-[#634e44]' : 'text-white/82'}`}>
                  &ldquo;{note.text.slice(0, 140)}{note.text.length > 140 ? '...' : ''}&rdquo;
                </p>

                {/* Actions */}
                <div className={`mt-4 flex items-center gap-4 border-t pt-3 ${isEven ? 'border-[#f1e4d7]' : 'border-white/15'}`}>
                  <button
                    type="button"
                    onClick={() => toggleLike(note.id)}
                    className={`flex items-center gap-1.5 text-xs transition ${
                      isLiked
                        ? 'text-[#e11d48]'
                        : isEven
                        ? 'text-[#8a7368] hover:text-[#e11d48]'
                        : 'text-white/60 hover:text-[#f2c57e]'
                    }`}
                  >
                    <Heart className={`h-3.5 w-3.5 ${isLiked ? 'fill-current' : ''}`} />
                    {note.likes + (isLiked ? 1 : 0)}
                  </button>
                  <button
                    type="button"
                    className={`flex items-center gap-1.5 text-xs transition ${
                      isEven ? 'text-[#8a7368] hover:text-[#9d531c]' : 'text-white/60 hover:text-[#f2c57e]'
                    }`}
                  >
                    <Volume2 className="h-3.5 w-3.5" />
                    Listen
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Banner */}
      <div className="mt-10 rounded-[1.5rem] bg-gradient-to-r from-[#261813] via-[#5c3a24] to-[#9d531c] p-6 text-white shadow-[0_24px_60px_rgba(52,30,19,0.18)] sm:p-8">
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/15">
            <Mic className="h-6 w-6 text-[#f2c57e]" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Leave your own voice note</h3>
            <p className="mt-1 text-sm text-white/70">
              Record a quick 30-second review and it might be featured here. No typing needed.
            </p>
          </div>
          <button
            type="button"
            className="shrink-0 rounded-full bg-[#f2c57e] px-6 py-3 text-sm font-semibold text-[#261813] transition hover:bg-[#ffd58a]"
          >
            Record Now
          </button>
        </div>
      </div>
    </section>
  );
}

