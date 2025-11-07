#version 450 core
#extension GL_ARB_gpu_shader_int64 : enable
#extension GL_ARB_shader_ballot : enable
#extension GL_ARB_shader_group_vote : enable
#extension GL_EXT_shader_image_load_formatted : enable
#extension GL_EXT_texture_shadow_lod : enable
#extension GL_ARB_shader_draw_parameters : enable
#extension GL_ARB_shader_viewport_layer_array : enable
#extension GL_NV_viewport_array2 : enable
#pragma optionNV(fastmath off)

const int undef = 0;

layout (binding = 0, std140) uniform _support_buffer
{
    uint alpha_test;
    uint is_bgra[8];
    precise vec4 viewport_inverse;
    precise vec4 viewport_size;
    int frag_scale_count;
    precise float render_scale[73];
    ivec4 tfe_offset;
    int tfe_vertex_count;
} support_buffer;

layout (binding = 9, std140) uniform _vp_c8
{
    precise vec4 data[4096];
} vp_c8;

layout (binding = 8, std140) uniform _vp_c7
{
    precise vec4 data[4096];
} vp_c7;

layout (binding = 6, std140) uniform _vp_c5
{
    precise vec4 data[4096];
} vp_c5;

layout (binding = 5, std140) uniform _vp_c4
{
    precise vec4 data[4096];
} vp_c4;

layout (binding = 7, std140) uniform _vp_c6
{
    precise vec4 data[4096];
} vp_c6;

layout (binding = 4, std140) uniform _vp_c3
{
    precise vec4 data[4096];
} vp_c3;

layout (location = 0) in vec4 in_attr0;
layout (location = 1) in vec4 in_attr1;
layout (location = 2) in vec4 in_attr2;
layout (location = 4) in vec4 in_attr4;
layout (location = 6) in vec4 in_attr6;
layout (location = 8) in vec4 in_attr8;

layout (location = 0) out vec4 out_attr0;
layout (location = 1) out vec4 out_attr1;
layout (location = 2) out vec4 out_attr2;
layout (location = 3) out vec4 out_attr3;
layout (location = 4) out vec4 out_attr4;
layout (location = 5) out vec4 out_attr5;
layout (location = 6) out vec4 out_attr6;
layout (location = 8) out vec4 out_attr8;
layout (location = 9) out vec4 out_attr9;


void main()
{
    precise float temp_0;
    precise float temp_1;
    precise float temp_2;
    precise float temp_3;
    precise float temp_4;
    precise float temp_5;
    int temp_6;
    int temp_7;
    precise float temp_8;
    int temp_9;
    int temp_10;
    precise float temp_11;
    uint temp_12;
    int temp_13;
    int temp_14;
    int temp_15;
    precise float temp_16;
    precise float temp_17;
    precise float temp_18;
    uint temp_19;
    int temp_20;
    int temp_21;
    int temp_22;
    int temp_23;
    uint temp_24;
    uint temp_25;
    int temp_26;
    precise float temp_27;
    int temp_28;
    uint temp_29;
    int temp_30;
    precise float temp_31;
    int temp_32;
    uint temp_33;
    uint temp_34;
    int temp_35;
    precise float temp_36;
    int temp_37;
    uint temp_38;
    int temp_39;
    precise float temp_40;
    uint temp_41;
    uint temp_42;
    int temp_43;
    precise float temp_44;
    int temp_45;
    uint temp_46;
    int temp_47;
    precise float temp_48;
    int temp_49;
    uint temp_50;
    uint temp_51;
    int temp_52;
    precise float temp_53;
    int temp_54;
    uint temp_55;
    int temp_56;
    precise float temp_57;
    int temp_58;
    uint temp_59;
    uint temp_60;
    int temp_61;
    precise float temp_62;
    int temp_63;
    uint temp_64;
    int temp_65;
    precise float temp_66;
    uint temp_67;
    uint temp_68;
    int temp_69;
    precise float temp_70;
    int temp_71;
    uint temp_72;
    int temp_73;
    precise float temp_74;
    int temp_75;
    uint temp_76;
    uint temp_77;
    int temp_78;
    precise float temp_79;
    int temp_80;
    uint temp_81;
    int temp_82;
    precise float temp_83;
    int temp_84;
    uint temp_85;
    uint temp_86;
    int temp_87;
    precise float temp_88;
    int temp_89;
    uint temp_90;
    int temp_91;
    precise float temp_92;
    int temp_93;
    uint temp_94;
    uint temp_95;
    int temp_96;
    precise float temp_97;
    int temp_98;
    uint temp_99;
    int temp_100;
    precise float temp_101;
    int temp_102;
    uint temp_103;
    uint temp_104;
    int temp_105;
    precise float temp_106;
    int temp_107;
    uint temp_108;
    int temp_109;
    precise float temp_110;
    int temp_111;
    uint temp_112;
    uint temp_113;
    int temp_114;
    precise float temp_115;
    int temp_116;
    uint temp_117;
    int temp_118;
    precise float temp_119;
    precise float temp_120;
    precise float temp_121;
    int temp_122;
    uint temp_123;
    uint temp_124;
    int temp_125;
    precise float temp_126;
    int temp_127;
    uint temp_128;
    int temp_129;
    precise float temp_130;
    precise float temp_131;
    precise float temp_132;
    precise float temp_133;
    precise float temp_134;
    precise float temp_135;
    precise float temp_136;
    precise float temp_137;
    precise float temp_138;
    precise float temp_139;
    precise float temp_140;
    precise float temp_141;
    precise float temp_142;
    precise float temp_143;
    precise float temp_144;
    precise float temp_145;
    precise float temp_146;
    precise float temp_147;
    precise float temp_148;
    precise float temp_149;
    precise float temp_150;
    precise float temp_151;
    precise float temp_152;
    precise float temp_153;
    precise float temp_154;
    precise float temp_155;
    precise float temp_156;
    int temp_157;
    precise float temp_158;
    precise float temp_159;
    precise float temp_160;
    precise float temp_161;
    precise float temp_162;
    precise float temp_163;
    precise float temp_164;
    precise float temp_165;
    precise float temp_166;
    precise float temp_167;
    precise float temp_168;
    precise float temp_169;
    precise float temp_170;
    int temp_171;
    precise float temp_172;
    precise float temp_173;
    precise float temp_174;
    int temp_175;
    uint temp_176;
    uint temp_177;
    int temp_178;
    precise float temp_179;
    precise float temp_180;
    precise float temp_181;
    precise float temp_182;
    int temp_183;
    uint temp_184;
    uint temp_185;
    int temp_186;
    precise float temp_187;
    int temp_188;
    uint temp_189;
    int temp_190;
    precise float temp_191;
    precise float temp_192;
    precise float temp_193;
    int temp_194;
    uint temp_195;
    uint temp_196;
    int temp_197;
    precise float temp_198;
    int temp_199;
    uint temp_200;
    int temp_201;
    precise float temp_202;
    precise float temp_203;
    precise float temp_204;
    precise float temp_205;
    precise float temp_206;
    precise float temp_207;
    precise float temp_208;
    precise float temp_209;
    int temp_210;
    uint temp_211;
    uint temp_212;
    int temp_213;
    precise float temp_214;
    precise float temp_215;
    precise float temp_216;
    precise float temp_217;
    precise float temp_218;
    precise float temp_219;
    precise float temp_220;
    precise float temp_221;
    precise float temp_222;
    precise float temp_223;
    precise float temp_224;
    precise float temp_225;
    precise float temp_226;
    precise float temp_227;
    precise float temp_228;
    precise float temp_229;
    precise float temp_230;
    precise float temp_231;
    precise float temp_232;
    precise float temp_233;
    precise float temp_234;
    precise float temp_235;
    precise float temp_236;
    precise float temp_237;
    precise float temp_238;
    precise float temp_239;
    precise float temp_240;
    precise float temp_241;
    precise float temp_242;
    precise float temp_243;
    precise float temp_244;
    precise float temp_245;
    precise float temp_246;
    precise float temp_247;
    precise float temp_248;
    precise float temp_249;
    precise float temp_250;
    precise float temp_251;
    precise float temp_252;
    precise float temp_253;
    precise float temp_254;
    precise float temp_255;
    precise float temp_256;
    precise float temp_257;
    precise float temp_258;
    precise float temp_259;
    precise float temp_260;
    precise float temp_261;
    precise float temp_262;
    precise float temp_263;
    precise float temp_264;
    precise float temp_265;
    precise float temp_266;
    precise float temp_267;
    precise float temp_268;
    precise float temp_269;
    precise float temp_270;
    precise float temp_271;
    precise float temp_272;
    precise float temp_273;
    precise float temp_274;
    precise float temp_275;
    precise float temp_276;
    precise float temp_277;
    precise float temp_278;
    precise float temp_279;
    precise float temp_280;
    precise float temp_281;
    precise float temp_282;
    precise float temp_283;
    precise float temp_284;
    precise float temp_285;
    precise float temp_286;
    precise float temp_287;
    precise float temp_288;
    precise float temp_289;
    precise float temp_290;
    precise float temp_291;
    precise float temp_292;
    precise float temp_293;
    precise float temp_294;
    precise float temp_295;
    precise float temp_296;
    precise float temp_297;
    precise float temp_298;
    precise float temp_299;
    precise float temp_300;
    precise float temp_301;
    precise float temp_302;
    precise float temp_303;
    precise float temp_304;
    precise float temp_305;
    precise float temp_306;
    precise float temp_307;
    precise float temp_308;
    precise float temp_309;
    precise float temp_310;
    precise float temp_311;
    precise float temp_312;
    precise float temp_313;
    precise float temp_314;
    precise float temp_315;
    precise float temp_316;
    precise float temp_317;
    precise float temp_318;
    precise float temp_319;
    precise float temp_320;
    precise float temp_321;
    precise float temp_322;
    precise float temp_323;
    precise float temp_324;
    precise float temp_325;
    precise float temp_326;
    precise float temp_327;
    precise float temp_328;
    precise float temp_329;
    precise float temp_330;
    precise float temp_331;
    precise float temp_332;
    precise float temp_333;
    precise float temp_334;
    precise float temp_335;
    precise float temp_336;
    precise float temp_337;
    precise float temp_338;
    precise float temp_339;
    precise float temp_340;
    precise float temp_341;
    precise float temp_342;
    precise float temp_343;
    precise float temp_344;
    precise float temp_345;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    // 0x000008: 0x4C9807940027001A Mov
    // 0x000010: 0xEFD87F800E07FF00 Ald
    temp_0 = in_attr6.x;
    // 0x000018: 0x4C98079400370006 Mov
    // 0x000028: 0xEFD87F800E47FF01 Ald
    temp_1 = in_attr6.y;
    // 0x000030: 0xEFD87F801047FF19 Ald
    temp_2 = in_attr8.y;
    // 0x000038: 0xEFD87F800807FF27 Ald
    temp_3 = in_attr0.x;
    // 0x000048: 0xEFD87F801007FF18 Ald
    temp_4 = in_attr8.x;
    // 0x000050: 0xEFD87F800A07FF2D Ald
    temp_5 = in_attr2.x;
    // 0x000058: 0x36007F800307002F Xmad
    temp_6 = floatBitsToInt(temp_0) & 0xFFFF;
    temp_7 = temp_6 * 48;
    // 0x000068: 0xEFD87F800907FF1B Ald
    temp_8 = in_attr1.x;
    // 0x000070: 0x36007F800307012C Xmad
    temp_9 = floatBitsToInt(temp_1) & 0xFFFF;
    temp_10 = temp_9 * 48;
    // 0x000078: 0xEFD87F800847FF1C Ald
    temp_11 = in_attr0.y;
    // 0x000088: 0x362017900307002F Xmad
    temp_12 = floatBitsToUint(temp_0) >> 16;
    temp_13 = int(temp_12) * 48;
    temp_14 = temp_13 << 16;
    temp_15 = temp_14 + temp_7;
    // 0x000090: 0xEFD87F800A47FF1E Ald
    temp_16 = in_attr2.y;
    // 0x000098: 0x51A00D140047191A Ffma
    temp_17 = fma(temp_2, vp_c5.data[0].z, vp_c5.data[1].x);
    // 0x0000A8: 0xEFD87F800947FF20 Ald
    temp_18 = in_attr1.y;
    // 0x0000B0: 0x362016100307012C Xmad
    temp_19 = floatBitsToUint(temp_1) >> 16;
    temp_20 = int(temp_19) * 48;
    temp_21 = temp_20 << 16;
    temp_22 = temp_21 + temp_10;
    // 0x0000B8: 0xEF95008001072F02 Ldc
    temp_23 = temp_15 + 16;
    temp_24 = uint(temp_23) >> 2;
    temp_25 = temp_24 >> 2;
    temp_26 = int(temp_24) & 3;
    temp_27 = vp_c8.data[int(temp_25)][temp_26];
    temp_28 = int(temp_24) + 1;
    temp_29 = uint(temp_28) >> 2;
    temp_30 = temp_28 & 3;
    temp_31 = vp_c8.data[int(temp_29)][temp_30];
    // 0x0000C8: 0xEF95008002072F00 Ldc
    temp_32 = temp_15 + 32;
    temp_33 = uint(temp_32) >> 2;
    temp_34 = temp_33 >> 2;
    temp_35 = int(temp_33) & 3;
    temp_36 = vp_c8.data[int(temp_34)][temp_35];
    temp_37 = int(temp_33) + 1;
    temp_38 = uint(temp_37) >> 2;
    temp_39 = temp_37 & 3;
    temp_40 = vp_c8.data[int(temp_38)][temp_39];
    // 0x0000D0: 0xEF95008000072F04 Ldc
    temp_41 = uint(temp_15) >> 2;
    temp_42 = temp_41 >> 2;
    temp_43 = int(temp_41) & 3;
    temp_44 = vp_c8.data[int(temp_42)][temp_43];
    temp_45 = int(temp_41) + 1;
    temp_46 = uint(temp_45) >> 2;
    temp_47 = temp_45 & 3;
    temp_48 = vp_c8.data[int(temp_46)][temp_47];
    // 0x0000D8: 0xEF95008001872F0E Ldc
    temp_49 = temp_15 + 24;
    temp_50 = uint(temp_49) >> 2;
    temp_51 = temp_50 >> 2;
    temp_52 = int(temp_50) & 3;
    temp_53 = vp_c8.data[int(temp_51)][temp_52];
    temp_54 = int(temp_50) + 1;
    temp_55 = uint(temp_54) >> 2;
    temp_56 = temp_54 & 3;
    temp_57 = vp_c8.data[int(temp_55)][temp_56];
    // 0x0000E8: 0xEF95008001072C0A Ldc
    temp_58 = temp_22 + 16;
    temp_59 = uint(temp_58) >> 2;
    temp_60 = temp_59 >> 2;
    temp_61 = int(temp_59) & 3;
    temp_62 = vp_c8.data[int(temp_60)][temp_61];
    temp_63 = int(temp_59) + 1;
    temp_64 = uint(temp_63) >> 2;
    temp_65 = temp_63 & 3;
    temp_66 = vp_c8.data[int(temp_64)][temp_65];
    // 0x0000F0: 0xEF95008000072C14 Ldc
    temp_67 = uint(temp_22) >> 2;
    temp_68 = temp_67 >> 2;
    temp_69 = int(temp_67) & 3;
    temp_70 = vp_c8.data[int(temp_68)][temp_69];
    temp_71 = int(temp_67) + 1;
    temp_72 = uint(temp_71) >> 2;
    temp_73 = temp_71 & 3;
    temp_74 = vp_c8.data[int(temp_72)][temp_73];
    // 0x0000F8: 0xEF95008002072C16 Ldc
    temp_75 = temp_22 + 32;
    temp_76 = uint(temp_75) >> 2;
    temp_77 = temp_76 >> 2;
    temp_78 = int(temp_76) & 3;
    temp_79 = vp_c8.data[int(temp_77)][temp_78];
    temp_80 = int(temp_76) + 1;
    temp_81 = uint(temp_80) >> 2;
    temp_82 = temp_80 & 3;
    temp_83 = vp_c8.data[int(temp_81)][temp_82];
    // 0x000108: 0xEF95008002872F0C Ldc
    temp_84 = temp_15 + 40;
    temp_85 = uint(temp_84) >> 2;
    temp_86 = temp_85 >> 2;
    temp_87 = int(temp_85) & 3;
    temp_88 = vp_c8.data[int(temp_86)][temp_87];
    temp_89 = int(temp_85) + 1;
    temp_90 = uint(temp_89) >> 2;
    temp_91 = temp_89 & 3;
    temp_92 = vp_c8.data[int(temp_90)][temp_91];
    // 0x000110: 0xEF95008000872C08 Ldc
    temp_93 = temp_22 + 8;
    temp_94 = uint(temp_93) >> 2;
    temp_95 = temp_94 >> 2;
    temp_96 = int(temp_94) & 3;
    temp_97 = vp_c8.data[int(temp_95)][temp_96];
    temp_98 = int(temp_94) + 1;
    temp_99 = uint(temp_98) >> 2;
    temp_100 = temp_98 & 3;
    temp_101 = vp_c8.data[int(temp_99)][temp_100];
    // 0x000118: 0xEF95008001872C10 Ldc
    temp_102 = temp_22 + 24;
    temp_103 = uint(temp_102) >> 2;
    temp_104 = temp_103 >> 2;
    temp_105 = int(temp_103) & 3;
    temp_106 = vp_c8.data[int(temp_104)][temp_105];
    temp_107 = int(temp_103) + 1;
    temp_108 = uint(temp_107) >> 2;
    temp_109 = temp_107 & 3;
    temp_110 = vp_c8.data[int(temp_108)][temp_109];
    // 0x000128: 0xEF95008000872F12 Ldc
    temp_111 = temp_15 + 8;
    temp_112 = uint(temp_111) >> 2;
    temp_113 = temp_112 >> 2;
    temp_114 = int(temp_112) & 3;
    temp_115 = vp_c8.data[int(temp_113)][temp_114];
    temp_116 = int(temp_112) + 1;
    temp_117 = uint(temp_116) >> 2;
    temp_118 = temp_116 & 3;
    temp_119 = vp_c8.data[int(temp_117)][temp_118];
    // 0x000130: 0x51A0031400571919 Ffma
    temp_120 = fma(temp_2, vp_c5.data[0].w, vp_c5.data[1].y);
    // 0x000138: 0xEFD87F800A87FF29 Ald
    temp_121 = in_attr2.z;
    // 0x000148: 0xEF95008002872C06 Ldc
    temp_122 = temp_22 + 40;
    temp_123 = uint(temp_122) >> 2;
    temp_124 = temp_123 >> 2;
    temp_125 = int(temp_123) & 3;
    temp_126 = vp_c8.data[int(temp_124)][temp_125];
    temp_127 = int(temp_123) + 1;
    temp_128 = uint(temp_127) >> 2;
    temp_129 = temp_127 & 3;
    temp_130 = vp_c8.data[int(temp_128)][temp_129];
    // 0x000150: 0x49A00D140007181A Ffma
    temp_131 = fma(temp_4, vp_c5.data[0].x, temp_17);
    // 0x000158: 0x49A00C9400171819 Ffma
    temp_132 = fma(temp_4, vp_c5.data[0].y, temp_120);
    // 0x000168: 0x5C6810000277021D Fmul
    temp_133 = temp_27 * temp_3;
    // 0x000170: 0x5C6810000277001F Fmul
    temp_134 = temp_36 * temp_3;
    // 0x000178: 0x5C68100002D70023 Fmul
    temp_135 = temp_36 * temp_5;
    // 0x000188: 0x5C68100001B70026 Fmul
    temp_136 = temp_36 * temp_8;
    // 0x000190: 0x5C68100002770A25 Fmul
    temp_137 = temp_62 * temp_3;
    // 0x000198: 0x5C6810000277142A Fmul
    temp_138 = temp_70 * temp_3;
    // 0x0001A8: 0x5C68100002771621 Fmul
    temp_139 = temp_79 * temp_3;
    // 0x0001B0: 0x5C68100002770422 Fmul
    temp_140 = temp_44 * temp_3;
    // 0x0001B8: 0xEFD87F800887FF27 Ald
    temp_141 = in_attr0.z;
    // 0x0001C8: 0x5C68100002D70218 Fmul
    temp_142 = temp_27 * temp_5;
    // 0x0001D0: 0x5C68100002D70A00 Fmul
    temp_143 = temp_62 * temp_5;
    // 0x0001D8: 0x5C68100002D71624 Fmul
    temp_144 = temp_79 * temp_5;
    // 0x0001E8: 0x5C68100002D7142B Fmul
    temp_145 = temp_70 * temp_5;
    // 0x0001F0: 0x5C68100002D70428 Fmul
    temp_146 = temp_44 * temp_5;
    // 0x0001F8: 0xEFD87F800987FF2D Ald
    temp_147 = in_attr1.z;
    // 0x000208: 0x5C68100001B70202 Fmul
    temp_148 = temp_27 * temp_8;
    // 0x000210: 0x59A00E8001C7031D Ffma
    temp_149 = fma(temp_31, temp_11, temp_133);
    // 0x000218: 0x59A00C0001E70318 Ffma
    temp_150 = fma(temp_31, temp_16, temp_142);
    // 0x000228: 0x59A0118001E70123 Ffma
    temp_151 = fma(temp_40, temp_16, temp_135);
    // 0x000230: 0x59A0130002070126 Ffma
    temp_152 = fma(temp_40, temp_18, temp_136);
    // 0x000238: 0x5C68100001B70A0A Fmul
    temp_153 = temp_62 * temp_8;
    // 0x000248: 0x59A0010002070303 Ffma
    temp_154 = fma(temp_31, temp_18, temp_148);
    // 0x000250: 0x59A00F8001C70102 Ffma
    temp_155 = fma(temp_40, temp_11, temp_134);
    // 0x000258: 0x4CB0119002371A01 F2i
    temp_156 = trunc(vp_c4.data[8].w);
    temp_157 = int(temp_156);
    // 0x000268: 0x59A0000001E70B1F Ffma
    temp_158 = fma(temp_66, temp_16, temp_143);
    // 0x000270: 0xEFD87F800C47FF00 Ald
    temp_159 = in_attr4.y;
    // 0x000278: 0x5C68100001B71616 Fmul
    temp_160 = temp_79 * temp_8;
    // 0x000288: 0x5C68100001B7042E Fmul
    temp_161 = temp_44 * temp_8;
    // 0x000290: 0x5C68100001B7141B Fmul
    temp_162 = temp_70 * temp_8;
    // 0x000298: 0xEFD87F800C07FF14 Ald
    temp_163 = in_attr4.x;
    // 0x0002A8: 0x59A0150001C7152A Ffma
    temp_164 = fma(temp_74, temp_11, temp_138);
    // 0x0002B0: 0x59A0158001E7152B Ffma
    temp_165 = fma(temp_74, temp_16, temp_145);
    // 0x0002B8: 0x59A0108001C71721 Ffma
    temp_166 = fma(temp_83, temp_11, temp_139);
    // 0x0002C8: 0x59A0120001E71724 Ffma
    temp_167 = fma(temp_83, temp_16, temp_144);
    // 0x0002D0: 0x59A0128001C70B25 Ffma
    temp_168 = fma(temp_66, temp_11, temp_137);
    // 0x0002D8: 0x59A00D800207151B Ffma
    temp_169 = fma(temp_74, temp_18, temp_162);
    // 0x0002E8: 0x59A0050002070B0A Ffma
    temp_170 = fma(temp_66, temp_18, temp_153);
    // 0x0002F0: 0x3848000000470115 Shl
    temp_171 = temp_157 << 4;
    // 0x0002F8: 0x59A00B0002071717 Ffma
    temp_172 = fma(temp_83, temp_18, temp_160);
    // 0x000308: 0x59A00E8002770E1D Ffma
    temp_173 = fma(temp_53, temp_141, temp_149);
    // 0x000310: 0x59A00C0002970E01 Ffma
    temp_174 = fma(temp_53, temp_121, temp_150);
    // 0x000318: 0xEF94007048871518 Ldc
    temp_175 = temp_171 + 0x488;
    temp_176 = uint(temp_175) >> 2;
    temp_177 = temp_176 >> 2;
    temp_178 = int(temp_176) & 3;
    temp_179 = vp_c7.data[int(temp_177)][temp_178];
    // 0x000328: 0x59A0110001C7051C Ffma
    temp_180 = fma(temp_48, temp_11, temp_140);
    // 0x000330: 0x59A0140001E70528 Ffma
    temp_181 = fma(temp_48, temp_16, temp_146);
    // 0x000338: 0x59A017000207050B Ffma
    temp_182 = fma(temp_48, temp_18, temp_161);
    // 0x000348: 0xEF95007068071504 Ldc
    temp_183 = temp_171 + 0x680;
    temp_184 = uint(temp_183) >> 2;
    temp_185 = temp_184 >> 2;
    temp_186 = int(temp_184) & 3;
    temp_187 = vp_c7.data[int(temp_185)][temp_186];
    temp_188 = int(temp_184) + 1;
    temp_189 = uint(temp_188) >> 2;
    temp_190 = temp_188 & 3;
    temp_191 = vp_c7.data[int(temp_189)][temp_190];
    // 0x000350: 0x59A0018002D70E0E Ffma
    temp_192 = fma(temp_53, temp_147, temp_154);
    // 0x000358: 0x59A0010002770C16 Ffma
    temp_193 = fma(temp_88, temp_141, temp_155);
    // 0x000368: 0xEF95007048071502 Ldc
    temp_194 = temp_171 + 0x480;
    temp_195 = uint(temp_194) >> 2;
    temp_196 = temp_195 >> 2;
    temp_197 = int(temp_195) & 3;
    temp_198 = vp_c7.data[int(temp_196)][temp_197];
    temp_199 = int(temp_195) + 1;
    temp_200 = uint(temp_199) >> 2;
    temp_201 = temp_199 & 3;
    temp_202 = vp_c7.data[int(temp_200)][temp_201];
    // 0x000370: 0x59A015000277082A Ffma
    temp_203 = fma(temp_97, temp_141, temp_164);
    // 0x000378: 0x59A012800277101E Ffma
    temp_204 = fma(temp_106, temp_141, temp_168);
    // 0x000388: 0x59A00E000277121C Ffma
    temp_205 = fma(temp_115, temp_141, temp_180);
    // 0x000390: 0x59A0108002770621 Ffma
    temp_206 = fma(temp_126, temp_141, temp_166);
    // 0x000398: 0x5C58100001D70F0F Fadd
    temp_207 = temp_57 + temp_173;
    // 0x0003A8: 0x59A0118002970C23 Ffma
    temp_208 = fma(temp_88, temp_121, temp_151);
    // 0x0003B0: 0x5C58100002A7092A Fadd
    temp_209 = temp_101 + temp_203;
    // 0x0003B8: 0xEF94007068871509 Ldc
    temp_210 = temp_171 + 0x688;
    temp_211 = uint(temp_210) >> 2;
    temp_212 = temp_211 >> 2;
    temp_213 = int(temp_211) & 3;
    temp_214 = vp_c7.data[int(temp_212)][temp_213];
    // 0x0003C8: 0x5C58100001E71111 Fadd
    temp_215 = temp_110 + temp_204;
    // 0x0003D0: 0x5C58100001C71313 Fadd
    temp_216 = temp_119 + temp_205;
    // 0x0003D8: 0x5C58100002170707 Fadd
    temp_217 = temp_130 + temp_206;
    // 0x0003E8: 0x59A0130002D70C26 Ffma
    temp_218 = fma(temp_88, temp_147, temp_152);
    // 0x0003F0: 0x5C58100001670D0D Fadd
    temp_219 = temp_92 + temp_193;
    // 0x0003F8: 0x5C68100000072A2A Fmul
    temp_220 = temp_209 * temp_159;
    // 0x000408: 0x5C68100000071111 Fmul
    temp_221 = temp_215 * temp_159;
    // 0x000410: 0x59A0050002D7100A Ffma
    temp_222 = fma(temp_106, temp_147, temp_170);
    // 0x000418: 0x5C68100000070707 Fmul
    temp_223 = temp_217 * temp_159;
    // 0x000428: 0x59A0120002970615 Ffma
    temp_224 = fma(temp_126, temp_121, temp_167);
    // 0x000430: 0x59A015800297082B Ffma
    temp_225 = fma(temp_97, temp_121, temp_165);
    // 0x000438: 0x59A0150001471313 Ffma
    temp_226 = fma(temp_216, temp_163, temp_220);
    // 0x000448: 0x59A0088001470F0C Ffma
    temp_227 = fma(temp_207, temp_163, temp_221);
    // 0x000450: 0x59A00B8002D70617 Ffma
    temp_228 = fma(temp_126, temp_147, temp_172);
    // 0x000458: 0x59A0038001470D07 Ffma
    temp_229 = fma(temp_219, temp_163, temp_223);
    // 0x000468: 0x59A00D8002D7081B Ffma
    temp_230 = fma(temp_97, temp_147, temp_169);
    // 0x000470: 0x59A00F800297101F Ffma
    temp_231 = fma(temp_106, temp_121, temp_158);
    // 0x000478: 0x59A0020000271302 Ffma
    temp_232 = fma(temp_226, temp_198, temp_187);
    // 0x000488: 0x59A0028000370C03 Ffma
    temp_233 = fma(temp_227, temp_202, temp_191);
    // 0x000490: 0x59A0058002D7120B Ffma
    temp_234 = fma(temp_115, temp_147, temp_182);
    // 0x000498: 0x59A0140002971229 Ffma
    temp_235 = fma(temp_115, temp_121, temp_181);
    // 0x0004A8: 0x5C68100000071B05 Fmul
    temp_236 = temp_230 * temp_159;
    // 0x0004B0: 0x5C68100000071F1F Fmul
    temp_237 = temp_231 * temp_159;
    // 0x0004B8: 0x4C5830180B070204 Fadd
    temp_238 = 0.0 - vp_c6.data[44].x;
    temp_239 = temp_232 + temp_238;
    // 0x0004C8: 0x4C5830180B170306 Fadd
    temp_240 = 0.0 - vp_c6.data[44].y;
    temp_241 = temp_233 + temp_240;
    // 0x0004D0: 0x59A0048001870709 Ffma
    temp_242 = fma(temp_229, temp_179, temp_214);
    // 0x0004D8: 0x5C68100000070A07 Fmul
    temp_243 = temp_222 * temp_159;
    // 0x0004E8: 0x5C68100000072B2B Fmul
    temp_244 = temp_225 * temp_159;
    // 0x0004F0: 0x59A0028001470B05 Ffma
    temp_245 = fma(temp_234, temp_163, temp_236);
    // 0x0004F8: 0x4C68101803870408 Fmul
    temp_246 = temp_239 * vp_c6.data[14].x;
    // 0x000508: 0x59A00F8001470104 Ffma
    temp_247 = fma(temp_174, temp_163, temp_237);
    // 0x000510: 0x4C5830180B270901 Fadd
    temp_248 = 0.0 - vp_c6.data[44].z;
    temp_249 = temp_242 + temp_248;
    // 0x000518: 0x59A0038001470E0E Ffma
    temp_250 = fma(temp_192, temp_163, temp_243);
    // 0x000528: 0x4C5810180B970307 Fadd
    temp_251 = temp_233 + vp_c6.data[46].y;
    // 0x000530: 0x59A0158001472929 Ffma
    temp_252 = fma(temp_235, temp_163, temp_244);
    // 0x000538: 0x49A004180397060A Ffma
    temp_253 = fma(temp_241, vp_c6.data[14].y, temp_246);
    // 0x000548: 0x4C5810180BA70906 Fadd
    temp_254 = temp_242 + vp_c6.data[46].z;
    // 0x000550: 0x5C68100000071717 Fmul
    temp_255 = temp_228 * temp_159;
    // 0x000558: 0x5C68100000071515 Fmul
    temp_256 = temp_224 * temp_159;
    // 0x000568: 0xEFD87F800AC7FF00 Ald
    temp_257 = in_attr2.w;
    // 0x000570: 0x4C98079803C70013 Mov
    // 0x000578: 0xEFF07F800D07FF02 Ast
    out_attr5.x = temp_232;
    // 0x000588: 0x4C6810180C270608 Fmul
    temp_258 = temp_254 * vp_c6.data[48].z;
    // 0x000590: 0xEFF07F800D47FF03 Ast
    out_attr5.y = temp_233;
    // 0x000598: 0x49A0051803A7010C Ffma
    temp_259 = fma(temp_249, vp_c6.data[14].z, temp_253);
    // 0x0005A8: 0xEFF07F800D87FF09 Ast
    out_attr5.z = temp_242;
    // 0x0005B0: 0x4C5810180B870201 Fadd
    temp_260 = temp_232 + vp_c6.data[46].x;
    // 0x0005B8: 0xEFF07F800E07FF1A Ast
    out_attr6.x = temp_131;
    // 0x0005C8: 0x49A004180C17070B Ffma
    temp_261 = fma(temp_251, vp_c6.data[48].y, temp_258);
    // 0x0005D0: 0xEFF07F800E47FF19 Ast
    out_attr6.y = temp_132;
    // 0x0005D8: 0x5C68100000570508 Fmul
    temp_262 = temp_245 * temp_245;
    // 0x0005E8: 0x5C6810000297290A Fmul
    temp_263 = temp_252 * temp_252;
    // 0x0005F0: 0x59A00B8001472626 Ffma
    temp_264 = fma(temp_218, temp_163, temp_255);
    // 0x0005F8: 0x59A00A8001472323 Ffma
    temp_265 = fma(temp_208, temp_163, temp_256);
    // 0x000608: 0x4C58300C02F7020D Fadd
    temp_266 = 0.0 - vp_c3.data[11].w;
    temp_267 = temp_232 + temp_266;
    // 0x000610: 0x49A005980C07010B Ffma
    temp_268 = fma(temp_260, vp_c6.data[48].x, temp_261);
    // 0x000618: 0xEFF07F800B07FF0D Ast
    out_attr3.x = temp_267;
    // 0x000628: 0x59A0040000E70E08 Ffma
    temp_269 = fma(temp_250, temp_250, temp_262);
    // 0x000630: 0x51A0099803B70C13 Ffma
    temp_270 = fma(temp_259, vp_c6.data[15].x, vp_c6.data[14].w);
    // 0x000638: 0x59A005000047040A Ffma
    temp_271 = fma(temp_247, temp_247, temp_263);
    // 0x000648: 0xEFF07F801047FF13 Ast
    out_attr8.y = temp_270;
    // 0x000650: 0x4C6810180C67060C Fmul
    temp_272 = temp_254 * vp_c6.data[49].z;
    // 0x000658: 0x4C58300C0337030F Fadd
    temp_273 = 0.0 - vp_c3.data[12].w;
    temp_274 = temp_233 + temp_273;
    // 0x000668: 0x4C6810180BB70B11 Fmul
    temp_275 = temp_268 * vp_c6.data[46].w;
    // 0x000670: 0xEFF07F800B47FF0F Ast
    out_attr3.y = temp_274;
    // 0x000678: 0x59A004000267260D Ffma
    temp_276 = fma(temp_264, temp_264, temp_269);
    // 0x000688: 0xEFF07F801107FF11 Ast
    out_attr9.x = temp_275;
    // 0x000690: 0x59A005000237230B Ffma
    temp_277 = fma(temp_265, temp_265, temp_271);
    // 0x000698: 0x5080000000570D0F Mufu
    temp_278 = inversesqrt(temp_276);
    // 0x0006A8: 0x49A006180C57070C Ffma
    temp_279 = fma(temp_251, vp_c6.data[49].y, temp_272);
    // 0x0006B0: 0x5080000000570B12 Mufu
    temp_280 = inversesqrt(temp_277);
    // 0x0006B8: 0x4C58300C03770910 Fadd
    temp_281 = 0.0 - vp_c3.data[13].w;
    temp_282 = temp_242 + temp_281;
    // 0x0006C8: 0x4C68100C00470208 Fmul
    temp_283 = temp_232 * vp_c3.data[1].x;
    // 0x0006D0: 0xEFF07F800B87FF10 Ast
    out_attr3.z = temp_282;
    // 0x0006D8: 0x4C68100C0087020A Fmul
    temp_284 = temp_232 * vp_c3.data[2].x;
    // 0x0006E8: 0x4C6810180CA70606 Fmul
    temp_285 = temp_254 * vp_c6.data[50].z;
    // 0x0006F0: 0x49A0040C00570308 Ffma
    temp_286 = fma(temp_233, vp_c3.data[1].y, temp_283);
    // 0x0006F8: 0x5C68100000F70505 Fmul
    temp_287 = temp_245 * temp_278;
    // 0x000708: 0x49A006180C470110 Ffma
    temp_288 = fma(temp_260, vp_c6.data[49].x, temp_279);
    // 0x000710: 0xEFF07F800807FF05 Ast
    out_attr0.x = temp_287;
    // 0x000718: 0x4C68100C0007020C Fmul
    temp_289 = temp_232 * vp_c3.data[0].x;
    // 0x000728: 0x4C58101002070902 Fadd
    temp_290 = temp_242 + vp_c4.data[8].x;
    // 0x000730: 0x49A0050C0097030B Ffma
    temp_291 = fma(temp_233, vp_c3.data[2].y, temp_284);
    // 0x000738: 0x5C68100001270404 Fmul
    temp_292 = temp_247 * temp_280;
    // 0x000748: 0x5C68100001272929 Fmul
    temp_293 = temp_252 * temp_280;
    // 0x000750: 0xEFF07F800947FF04 Ast
    out_attr1.y = temp_292;
    // 0x000758: 0x4C6810180BB71013 Fmul
    temp_294 = temp_288 * vp_c6.data[46].w;
    // 0x000768: 0xEFF07F800907FF29 Ast
    out_attr1.x = temp_293;
    // 0x000770: 0x5C68100000F70E10 Fmul
    temp_295 = temp_250 * temp_278;
    // 0x000778: 0xEFF07F801147FF13 Ast
    out_attr9.y = temp_294;
    // 0x000788: 0x5C68100000F7260F Fmul
    temp_296 = temp_264 * temp_278;
    // 0x000790: 0xEFF07F800847FF10 Ast
    out_attr0.y = temp_295;
    // 0x000798: 0x49A0060C0017030C Ffma
    temp_297 = fma(temp_233, vp_c3.data[0].y, temp_289);
    // 0x0007A8: 0xEFF07F800887FF0F Ast
    out_attr0.z = temp_296;
    // 0x0007B0: 0x49A003180C970706 Ffma
    temp_298 = fma(temp_251, vp_c6.data[50].y, temp_285);
    // 0x0007B8: 0x49A0040C00670203 Ffma
    temp_299 = fma(temp_290, vp_c3.data[1].z, temp_286);
    // 0x0007C8: 0x49A0040C0067090A Ffma
    temp_300 = fma(temp_242, vp_c3.data[1].z, temp_286);
    // 0x0007D0: 0x5C68100001272312 Fmul
    temp_301 = temp_265 * temp_280;
    // 0x0007D8: 0x49A0058C00A70908 Ffma
    temp_302 = fma(temp_242, vp_c3.data[2].z, temp_291);
    // 0x0007E8: 0xEFF07F800987FF12 Ast
    out_attr1.z = temp_301;
    // 0x0007F0: 0x5C68100000F70407 Fmul
    temp_303 = temp_292 * temp_296;
    // 0x0007F8: 0x49A0058C00A7020B Ffma
    temp_304 = fma(temp_290, vp_c3.data[2].z, temp_291);
    // 0x000808: 0x49A0060C0027090D Ffma
    temp_305 = fma(temp_242, vp_c3.data[0].z, temp_297);
    // 0x000810: 0x49A0060C00270202 Ffma
    temp_306 = fma(temp_290, vp_c3.data[0].z, temp_297);
    // 0x000818: 0x49A003180C870101 Ffma
    temp_307 = fma(temp_260, vp_c6.data[50].x, temp_298);
    // 0x000828: 0x5C68100000571206 Fmul
    temp_308 = temp_301 * temp_287;
    // 0x000830: 0x59A2038001071209 Ffma
    temp_309 = 0.0 - temp_303;
    temp_310 = fma(temp_301, temp_295, temp_309);
    // 0x000838: 0x5C68100001072907 Fmul
    temp_311 = temp_293 * temp_295;
    // 0x000848: 0x4C58100C00370D0D Fadd
    temp_312 = temp_305 + vp_c3.data[0].w;
    // 0x000850: 0x4C58100C00370202 Fadd
    temp_313 = temp_306 + vp_c3.data[0].w;
    // 0x000858: 0x4C6810180BB7010C Fmul
    temp_314 = temp_307 * vp_c6.data[46].w;
    // 0x000868: 0x4C58100C00770A0A Fadd
    temp_315 = temp_300 + vp_c3.data[1].w;
    // 0x000870: 0xEFF07F801187FF0C Ast
    out_attr9.z = temp_314;
    // 0x000878: 0x59A2038000570407 Ffma
    temp_316 = 0.0 - temp_311;
    temp_317 = fma(temp_292, temp_287, temp_316);
    // 0x000888: 0x4C68101802C70D0D Fmul
    temp_318 = temp_312 * vp_c6.data[11].x;
    // 0x000890: 0x4C68100C02870201 Fmul
    temp_319 = temp_313 * vp_c3.data[10].x;
    // 0x000898: 0x4C68100C02470204 Fmul
    temp_320 = temp_313 * vp_c3.data[9].x;
    // 0x0008A8: 0x4C68100C02070205 Fmul
    temp_321 = temp_313 * vp_c3.data[8].x;
    // 0x0008B0: 0x4C58100C00770303 Fadd
    temp_322 = temp_299 + vp_c3.data[1].w;
    // 0x0008B8: 0x4C68100C01C70202 Fmul
    temp_323 = temp_313 * vp_c3.data[7].x;
    // 0x0008C8: 0x4C58100C00B70808 Fadd
    temp_324 = temp_302 + vp_c3.data[2].w;
    // 0x0008D0: 0x49A0069802D70A0A Ffma
    temp_325 = fma(temp_315, vp_c6.data[11].y, temp_318);
    // 0x0008D8: 0xEFF07F800C87FF08 Ast
    out_attr4.z = temp_324;
    // 0x0008E8: 0x4C58100C00B70B0B Fadd
    temp_326 = temp_304 + vp_c3.data[2].w;
    // 0x0008F0: 0x49A0008C02970301 Ffma
    temp_327 = fma(temp_322, vp_c3.data[10].y, temp_319);
    // 0x0008F8: 0x49A0020C02570304 Ffma
    temp_328 = fma(temp_322, vp_c3.data[9].y, temp_320);
    // 0x000908: 0x49A0028C02170305 Ffma
    temp_329 = fma(temp_322, vp_c3.data[8].y, temp_321);
    // 0x000910: 0x49A0010C01D70302 Ffma
    temp_330 = fma(temp_322, vp_c3.data[7].y, temp_323);
    // 0x000918: 0x49A0051802E7080A Ffma
    temp_331 = fma(temp_324, vp_c6.data[11].z, temp_325);
    // 0x000928: 0x59A2030000F72906 Ffma
    temp_332 = 0.0 - temp_308;
    temp_333 = fma(temp_293, temp_296, temp_332);
    // 0x000930: 0x4C98079803070008 Mov
    // 0x000938: 0x49A0008C02A70B01 Ffma
    temp_334 = fma(temp_326, vp_c3.data[10].z, temp_327);
    // 0x000948: 0x49A0020C02670B04 Ffma
    temp_335 = fma(temp_326, vp_c3.data[9].z, temp_328);
    // 0x000950: 0x49A0028C02270B05 Ffma
    temp_336 = fma(temp_326, vp_c3.data[8].z, temp_329);
    // 0x000958: 0x49A0010C01E70B02 Ffma
    temp_337 = fma(temp_326, vp_c3.data[7].z, temp_330);
    // 0x000968: 0x5C68100000070909 Fmul
    temp_338 = temp_310 * temp_257;
    // 0x000970: 0x5C68100000070606 Fmul
    temp_339 = temp_333 * temp_257;
    // 0x000978: 0xEFF07F800A07FF09 Ast
    out_attr2.x = temp_338;
    // 0x000988: 0x5C68100000070707 Fmul
    temp_340 = temp_317 * temp_257;
    // 0x000990: 0xEFF07F800A47FF06 Ast
    out_attr2.y = temp_339;
    // 0x000998: 0x51A0041802F70A0A Ffma
    temp_341 = fma(temp_331, vp_c6.data[12].x, vp_c6.data[11].w);
    // 0x0009A8: 0xEFF07F800A87FF07 Ast
    out_attr2.z = temp_340;
    // 0x0009B0: 0x4C58100C02B70101 Fadd
    temp_342 = temp_334 + vp_c3.data[10].w;
    // 0x0009B8: 0xEFF07F801007FF0A Ast
    out_attr8.x = temp_341;
    // 0x0009C8: 0x4C58100C02770404 Fadd
    temp_343 = temp_335 + vp_c3.data[9].w;
    // 0x0009D0: 0xEFF07F8007C7FF01 Ast
    gl_Position.w = temp_342;
    // 0x0009D8: 0x4C58100C02370505 Fadd
    temp_344 = temp_336 + vp_c3.data[8].w;
    // 0x0009E8: 0xEFF07F800787FF04 Ast
    gl_Position.z = temp_343;
    // 0x0009F0: 0x4C58100C01F70202 Fadd
    temp_345 = temp_337 + vp_c3.data[7].w;
    // 0x0009F8: 0xEFF07F800747FF05 Ast
    gl_Position.y = temp_344;
    // 0x000A08: 0xEFF07F800707FF02 Ast
    gl_Position.x = temp_345;
    // 0x000A10: 0xE30000000007000F Exit
    return;
}
