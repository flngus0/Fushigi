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
layout (location = 12) in vec4 in_attr12;

layout (location = 0) out vec4 out_attr0;
layout (location = 1) out vec4 out_attr1;
layout (location = 2) out vec4 out_attr2;
layout (location = 3) out vec4 out_attr3;
layout (location = 4) out vec4 out_attr4;
layout (location = 5) out vec4 out_attr5;
layout (location = 6) out vec4 out_attr6;
layout (location = 7) out vec4 out_attr7;
layout (location = 9) out vec4 out_attr9;
layout (location = 10) out vec4 out_attr10;


void main()
{
    precise float temp_0;
    precise float temp_1;
    precise float temp_2;
    precise float temp_3;
    int temp_4;
    int temp_5;
    precise float temp_6;
    int temp_7;
    int temp_8;
    precise float temp_9;
    uint temp_10;
    int temp_11;
    int temp_12;
    int temp_13;
    precise float temp_14;
    precise float temp_15;
    precise float temp_16;
    uint temp_17;
    int temp_18;
    int temp_19;
    int temp_20;
    int temp_21;
    uint temp_22;
    uint temp_23;
    int temp_24;
    precise float temp_25;
    int temp_26;
    uint temp_27;
    int temp_28;
    precise float temp_29;
    int temp_30;
    uint temp_31;
    uint temp_32;
    int temp_33;
    precise float temp_34;
    int temp_35;
    uint temp_36;
    int temp_37;
    precise float temp_38;
    uint temp_39;
    uint temp_40;
    int temp_41;
    precise float temp_42;
    int temp_43;
    uint temp_44;
    int temp_45;
    precise float temp_46;
    precise float temp_47;
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
    uint temp_58;
    uint temp_59;
    int temp_60;
    precise float temp_61;
    int temp_62;
    uint temp_63;
    int temp_64;
    precise float temp_65;
    int temp_66;
    uint temp_67;
    uint temp_68;
    int temp_69;
    precise float temp_70;
    int temp_71;
    uint temp_72;
    int temp_73;
    precise float temp_74;
    precise float temp_75;
    precise float temp_76;
    precise float temp_77;
    precise float temp_78;
    int temp_79;
    uint temp_80;
    uint temp_81;
    int temp_82;
    precise float temp_83;
    int temp_84;
    uint temp_85;
    int temp_86;
    precise float temp_87;
    int temp_88;
    uint temp_89;
    uint temp_90;
    int temp_91;
    precise float temp_92;
    int temp_93;
    uint temp_94;
    int temp_95;
    precise float temp_96;
    precise float temp_97;
    precise float temp_98;
    precise float temp_99;
    precise float temp_100;
    int temp_101;
    uint temp_102;
    uint temp_103;
    int temp_104;
    precise float temp_105;
    int temp_106;
    uint temp_107;
    int temp_108;
    precise float temp_109;
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
    int temp_120;
    uint temp_121;
    uint temp_122;
    int temp_123;
    precise float temp_124;
    int temp_125;
    uint temp_126;
    int temp_127;
    precise float temp_128;
    int temp_129;
    uint temp_130;
    uint temp_131;
    int temp_132;
    precise float temp_133;
    int temp_134;
    uint temp_135;
    int temp_136;
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
    precise float temp_157;
    precise float temp_158;
    precise float temp_159;
    precise float temp_160;
    precise float temp_161;
    precise float temp_162;
    int temp_163;
    precise float temp_164;
    precise float temp_165;
    precise float temp_166;
    precise float temp_167;
    precise float temp_168;
    precise float temp_169;
    precise float temp_170;
    precise float temp_171;
    precise float temp_172;
    precise float temp_173;
    precise float temp_174;
    precise float temp_175;
    precise float temp_176;
    precise float temp_177;
    precise float temp_178;
    precise float temp_179;
    int temp_180;
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
    int temp_193;
    uint temp_194;
    uint temp_195;
    int temp_196;
    precise float temp_197;
    int temp_198;
    uint temp_199;
    int temp_200;
    precise float temp_201;
    precise float temp_202;
    precise float temp_203;
    precise float temp_204;
    precise float temp_205;
    precise float temp_206;
    precise float temp_207;
    precise float temp_208;
    precise float temp_209;
    precise float temp_210;
    int temp_211;
    uint temp_212;
    uint temp_213;
    int temp_214;
    precise float temp_215;
    precise float temp_216;
    int temp_217;
    uint temp_218;
    uint temp_219;
    int temp_220;
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
    precise float temp_346;
    precise float temp_347;
    precise float temp_348;
    precise float temp_349;
    precise float temp_350;
    precise float temp_351;
    precise float temp_352;
    precise float temp_353;
    precise float temp_354;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    // 0x000008: 0x4C98079400A7001D Mov
    // 0x000010: 0xEFD87F800E07FF01 Ald
    temp_0 = in_attr6.x;
    // 0x000018: 0x4C98079400B7001B Mov
    // 0x000028: 0xEFD87F800E47FF00 Ald
    temp_1 = in_attr6.y;
    // 0x000030: 0x4C98079400270006 Mov
    // 0x000038: 0xEFD87F801047FF18 Ald
    temp_2 = in_attr8.y;
    // 0x000048: 0x4C98079400370007 Mov
    // 0x000050: 0xEFD87F801007FF12 Ald
    temp_3 = in_attr8.x;
    // 0x000058: 0x36007F800307012A Xmad
    temp_4 = floatBitsToInt(temp_0) & 0xFFFF;
    temp_5 = temp_4 * 48;
    // 0x000068: 0xEFD87F800A07FF21 Ald
    temp_6 = in_attr2.x;
    // 0x000070: 0x36007F800307002E Xmad
    temp_7 = floatBitsToInt(temp_1) & 0xFFFF;
    temp_8 = temp_7 * 48;
    // 0x000078: 0xEFD87F800807FF29 Ald
    temp_9 = in_attr0.x;
    // 0x000088: 0x362015100307012A Xmad
    temp_10 = floatBitsToUint(temp_0) >> 16;
    temp_11 = int(temp_10) * 48;
    temp_12 = temp_11 << 16;
    temp_13 = temp_12 + temp_5;
    // 0x000090: 0xEFD87F800907FF1F Ald
    temp_14 = in_attr1.x;
    // 0x000098: 0x51A00E9400C7181D Ffma
    temp_15 = fma(temp_2, vp_c5.data[2].z, vp_c5.data[3].x);
    // 0x0000A8: 0xEFD87F800A47FF20 Ald
    temp_16 = in_attr2.y;
    // 0x0000B0: 0x362017100307002E Xmad
    temp_17 = floatBitsToUint(temp_1) >> 16;
    temp_18 = int(temp_17) * 48;
    temp_19 = temp_18 << 16;
    temp_20 = temp_19 + temp_8;
    // 0x0000B8: 0xEF95008001072A02 Ldc
    temp_21 = temp_13 + 16;
    temp_22 = uint(temp_21) >> 2;
    temp_23 = temp_22 >> 2;
    temp_24 = int(temp_22) & 3;
    temp_25 = vp_c8.data[int(temp_23)][temp_24];
    temp_26 = int(temp_22) + 1;
    temp_27 = uint(temp_26) >> 2;
    temp_28 = temp_26 & 3;
    temp_29 = vp_c8.data[int(temp_27)][temp_28];
    // 0x0000C8: 0xEF95008002072A16 Ldc
    temp_30 = temp_13 + 32;
    temp_31 = uint(temp_30) >> 2;
    temp_32 = temp_31 >> 2;
    temp_33 = int(temp_31) & 3;
    temp_34 = vp_c8.data[int(temp_32)][temp_33];
    temp_35 = int(temp_31) + 1;
    temp_36 = uint(temp_35) >> 2;
    temp_37 = temp_35 & 3;
    temp_38 = vp_c8.data[int(temp_36)][temp_37];
    // 0x0000D0: 0xEF95008000072A0A Ldc
    temp_39 = uint(temp_13) >> 2;
    temp_40 = temp_39 >> 2;
    temp_41 = int(temp_39) & 3;
    temp_42 = vp_c8.data[int(temp_40)][temp_41];
    temp_43 = int(temp_39) + 1;
    temp_44 = uint(temp_43) >> 2;
    temp_45 = temp_43 & 3;
    temp_46 = vp_c8.data[int(temp_44)][temp_45];
    // 0x0000D8: 0x51A00D9400D7181B Ffma
    temp_47 = fma(temp_2, vp_c5.data[2].w, vp_c5.data[3].y);
    // 0x0000E8: 0xEFD87F800847FF1E Ald
    temp_48 = in_attr0.y;
    // 0x0000F0: 0xEF95008001072E0E Ldc
    temp_49 = temp_20 + 16;
    temp_50 = uint(temp_49) >> 2;
    temp_51 = temp_50 >> 2;
    temp_52 = int(temp_50) & 3;
    temp_53 = vp_c8.data[int(temp_51)][temp_52];
    temp_54 = int(temp_50) + 1;
    temp_55 = uint(temp_54) >> 2;
    temp_56 = temp_54 & 3;
    temp_57 = vp_c8.data[int(temp_55)][temp_56];
    // 0x0000F8: 0xEF95008000072E04 Ldc
    temp_58 = uint(temp_20) >> 2;
    temp_59 = temp_58 >> 2;
    temp_60 = int(temp_58) & 3;
    temp_61 = vp_c8.data[int(temp_59)][temp_60];
    temp_62 = int(temp_58) + 1;
    temp_63 = uint(temp_62) >> 2;
    temp_64 = temp_62 & 3;
    temp_65 = vp_c8.data[int(temp_63)][temp_64];
    // 0x000108: 0xEF95008002072E00 Ldc
    temp_66 = temp_20 + 32;
    temp_67 = uint(temp_66) >> 2;
    temp_68 = temp_67 >> 2;
    temp_69 = int(temp_67) & 3;
    temp_70 = vp_c8.data[int(temp_68)][temp_69];
    temp_71 = int(temp_67) + 1;
    temp_72 = uint(temp_71) >> 2;
    temp_73 = temp_71 & 3;
    temp_74 = vp_c8.data[int(temp_72)][temp_73];
    // 0x000110: 0x51A003140047181C Ffma
    temp_75 = fma(temp_2, vp_c5.data[0].z, vp_c5.data[1].x);
    // 0x000118: 0xEFD87F800947FF22 Ald
    temp_76 = in_attr1.y;
    // 0x000128: 0x51A0039400571818 Ffma
    temp_77 = fma(temp_2, vp_c5.data[0].w, vp_c5.data[1].y);
    // 0x000130: 0xEFD87F800887FF2B Ald
    temp_78 = in_attr0.z;
    // 0x000138: 0xEF95008002872A14 Ldc
    temp_79 = temp_13 + 40;
    temp_80 = uint(temp_79) >> 2;
    temp_81 = temp_80 >> 2;
    temp_82 = int(temp_80) & 3;
    temp_83 = vp_c8.data[int(temp_81)][temp_82];
    temp_84 = int(temp_80) + 1;
    temp_85 = uint(temp_84) >> 2;
    temp_86 = temp_84 & 3;
    temp_87 = vp_c8.data[int(temp_85)][temp_86];
    // 0x000148: 0xEF95008000872E08 Ldc
    temp_88 = temp_20 + 8;
    temp_89 = uint(temp_88) >> 2;
    temp_90 = temp_89 >> 2;
    temp_91 = int(temp_89) & 3;
    temp_92 = vp_c8.data[int(temp_90)][temp_91];
    temp_93 = int(temp_89) + 1;
    temp_94 = uint(temp_93) >> 2;
    temp_95 = temp_93 & 3;
    temp_96 = vp_c8.data[int(temp_94)][temp_95];
    // 0x000150: 0x49A00E940087121D Ffma
    temp_97 = fma(temp_3, vp_c5.data[2].x, temp_15);
    // 0x000158: 0xEFD87F800987FF2F Ald
    temp_98 = in_attr1.z;
    // 0x000168: 0x49A00D940097121B Ffma
    temp_99 = fma(temp_3, vp_c5.data[2].y, temp_47);
    // 0x000170: 0x49A00E140007121C Ffma
    temp_100 = fma(temp_3, vp_c5.data[0].x, temp_75);
    // 0x000178: 0xEF95008001872A06 Ldc
    temp_101 = temp_13 + 24;
    temp_102 = uint(temp_101) >> 2;
    temp_103 = temp_102 >> 2;
    temp_104 = int(temp_102) & 3;
    temp_105 = vp_c8.data[int(temp_103)][temp_104];
    temp_106 = int(temp_102) + 1;
    temp_107 = uint(temp_106) >> 2;
    temp_108 = temp_106 & 3;
    temp_109 = vp_c8.data[int(temp_107)][temp_108];
    // 0x000188: 0x49A00C1400171218 Ffma
    temp_110 = fma(temp_3, vp_c5.data[0].y, temp_77);
    // 0x000190: 0xEF95008001872E12 Ldc
    temp_111 = temp_20 + 24;
    temp_112 = uint(temp_111) >> 2;
    temp_113 = temp_112 >> 2;
    temp_114 = int(temp_112) & 3;
    temp_115 = vp_c8.data[int(temp_113)][temp_114];
    temp_116 = int(temp_112) + 1;
    temp_117 = uint(temp_116) >> 2;
    temp_118 = temp_116 & 3;
    temp_119 = vp_c8.data[int(temp_117)][temp_118];
    // 0x000198: 0xEF95008002872E0C Ldc
    temp_120 = temp_20 + 40;
    temp_121 = uint(temp_120) >> 2;
    temp_122 = temp_121 >> 2;
    temp_123 = int(temp_121) & 3;
    temp_124 = vp_c8.data[int(temp_122)][temp_123];
    temp_125 = int(temp_121) + 1;
    temp_126 = uint(temp_125) >> 2;
    temp_127 = temp_125 & 3;
    temp_128 = vp_c8.data[int(temp_126)][temp_127];
    // 0x0001A8: 0xEF95008000872A10 Ldc
    temp_129 = temp_13 + 8;
    temp_130 = uint(temp_129) >> 2;
    temp_131 = temp_130 >> 2;
    temp_132 = int(temp_130) & 3;
    temp_133 = vp_c8.data[int(temp_131)][temp_132];
    temp_134 = int(temp_130) + 1;
    temp_135 = uint(temp_134) >> 2;
    temp_136 = temp_134 & 3;
    temp_137 = vp_c8.data[int(temp_135)][temp_136];
    // 0x0001B0: 0x4C68101406972121 Fmul
    temp_138 = temp_6 * vp_c5.data[26].y;
    // 0x0001B8: 0x4C68101406972020 Fmul
    temp_139 = temp_16 * vp_c5.data[26].y;
    // 0x0001C8: 0x5C68100002970219 Fmul
    temp_140 = temp_25 * temp_9;
    // 0x0001D0: 0x5C6810000217021A Fmul
    temp_141 = temp_25 * temp_138;
    // 0x0001D8: 0x5C68100001F70224 Fmul
    temp_142 = temp_25 * temp_14;
    // 0x0001E8: 0x5C68100002971625 Fmul
    temp_143 = temp_34 * temp_9;
    // 0x0001F0: 0x5C68100002171602 Fmul
    temp_144 = temp_34 * temp_138;
    // 0x0001F8: 0x5C68100001F7162C Fmul
    temp_145 = temp_34 * temp_14;
    // 0x000208: 0xEFD87F800A87FF16 Ald
    temp_146 = in_attr2.z;
    // 0x000210: 0x5C68100002970E28 Fmul
    temp_147 = temp_53 * temp_9;
    // 0x000218: 0x5C68100002170E26 Fmul
    temp_148 = temp_53 * temp_138;
    // 0x000228: 0x5C68100001F70E2D Fmul
    temp_149 = temp_53 * temp_14;
    // 0x000230: 0x5C68100002970427 Fmul
    temp_150 = temp_61 * temp_9;
    // 0x000238: 0x5C68100002970023 Fmul
    temp_151 = temp_70 * temp_9;
    // 0x000248: 0x5C6810000217000E Fmul
    temp_152 = temp_70 * temp_138;
    // 0x000250: 0x5C6810000217042A Fmul
    temp_153 = temp_61 * temp_138;
    // 0x000258: 0x5C68100002970A29 Fmul
    temp_154 = temp_42 * temp_9;
    // 0x000268: 0x5C68100002170A21 Fmul
    temp_155 = temp_42 * temp_138;
    // 0x000270: 0x5C68100001F70000 Fmul
    temp_156 = temp_70 * temp_14;
    // 0x000278: 0x5C68100001F70A0A Fmul
    temp_157 = temp_42 * temp_14;
    // 0x000288: 0x5C68100001F70404 Fmul
    temp_158 = temp_61 * temp_14;
    // 0x000290: 0x59A00C8001E70319 Ffma
    temp_159 = fma(temp_29, temp_48, temp_140);
    // 0x000298: 0x59A00D000207031F Ffma
    temp_160 = fma(temp_29, temp_139, temp_141);
    // 0x0002A8: 0x59A0120002270324 Ffma
    temp_161 = fma(temp_29, temp_76, temp_142);
    // 0x0002B0: 0x4CB0119002371A03 F2i
    temp_162 = trunc(vp_c4.data[8].w);
    temp_163 = int(temp_162);
    // 0x0002B8: 0x59A0128001E71725 Ffma
    temp_164 = fma(temp_38, temp_48, temp_143);
    // 0x0002C8: 0x59A0010002071702 Ffma
    temp_165 = fma(temp_38, temp_139, temp_144);
    // 0x0002D0: 0x59A016000227171A Ffma
    temp_166 = fma(temp_38, temp_76, temp_145);
    // 0x0002D8: 0x59A0140001E70F28 Ffma
    temp_167 = fma(temp_57, temp_48, temp_147);
    // 0x0002E8: 0x59A0130002070F17 Ffma
    temp_168 = fma(temp_57, temp_139, temp_148);
    // 0x0002F0: 0x59A0168002270F2D Ffma
    temp_169 = fma(temp_57, temp_76, temp_149);
    // 0x0002F8: 0x59A007000207010F Ffma
    temp_170 = fma(temp_74, temp_139, temp_152);
    // 0x000308: 0xEFD87F800C47FF0E Ald
    temp_171 = in_attr4.y;
    // 0x000310: 0x59A0138001E7052E Ffma
    temp_172 = fma(temp_65, temp_48, temp_150);
    // 0x000318: 0x59A015000207052A Ffma
    temp_173 = fma(temp_65, temp_139, temp_153);
    // 0x000328: 0x4C68101406971627 Fmul
    temp_174 = temp_146 * vp_c5.data[26].y;
    // 0x000330: 0x59A0020002270505 Ffma
    temp_175 = fma(temp_65, temp_76, temp_158);
    // 0x000338: 0xEFD87F800C07FF04 Ald
    temp_176 = in_attr4.x;
    // 0x000348: 0x59A0148001E70B29 Ffma
    temp_177 = fma(temp_46, temp_48, temp_154);
    // 0x000350: 0x59A0108002070B21 Ffma
    temp_178 = fma(temp_46, temp_139, temp_155);
    // 0x000358: 0x59A0050002270B0A Ffma
    temp_179 = fma(temp_46, temp_76, temp_157);
    // 0x000368: 0x384800000047030B Shl
    temp_180 = temp_163 << 4;
    // 0x000370: 0x59A0000002270116 Ffma
    temp_181 = fma(temp_74, temp_76, temp_156);
    // 0x000378: 0x59A0118001E70123 Ffma
    temp_182 = fma(temp_74, temp_48, temp_151);
    // 0x000388: 0xEF95007068070B00 Ldc
    temp_183 = temp_180 + 0x680;
    temp_184 = uint(temp_183) >> 2;
    temp_185 = temp_184 >> 2;
    temp_186 = int(temp_184) & 3;
    temp_187 = vp_c7.data[int(temp_185)][temp_186];
    temp_188 = int(temp_184) + 1;
    temp_189 = uint(temp_188) >> 2;
    temp_190 = temp_188 & 3;
    temp_191 = vp_c7.data[int(temp_189)][temp_190];
    // 0x000390: 0x59A0010002771422 Ffma
    temp_192 = fma(temp_83, temp_174, temp_165);
    // 0x000398: 0xEF95007048070B02 Ldc
    temp_193 = temp_180 + 0x480;
    temp_194 = uint(temp_193) >> 2;
    temp_195 = temp_194 >> 2;
    temp_196 = int(temp_194) & 3;
    temp_197 = vp_c7.data[int(temp_195)][temp_196];
    temp_198 = int(temp_194) + 1;
    temp_199 = uint(temp_198) >> 2;
    temp_200 = temp_198 & 3;
    temp_201 = vp_c7.data[int(temp_199)][temp_200];
    // 0x0003A8: 0x59A0170002B7082E Ffma
    temp_202 = fma(temp_92, temp_78, temp_172);
    // 0x0003B0: 0x59A00C8002B70619 Ffma
    temp_203 = fma(temp_105, temp_78, temp_159);
    // 0x0003B8: 0x59A00F800277061F Ffma
    temp_204 = fma(temp_105, temp_174, temp_160);
    // 0x0003C8: 0x59A0120002F70606 Ffma
    temp_205 = fma(temp_105, temp_98, temp_161);
    // 0x0003D0: 0x59A0128002B7141E Ffma
    temp_206 = fma(temp_83, temp_78, temp_164);
    // 0x0003D8: 0x59A0140002B71220 Ffma
    temp_207 = fma(temp_115, temp_78, temp_167);
    // 0x0003E8: 0x59A0118002B70C23 Ffma
    temp_208 = fma(temp_124, temp_78, temp_182);
    // 0x0003F0: 0x59A0148002B7102B Ffma
    temp_209 = fma(temp_133, temp_78, temp_177);
    // 0x0003F8: 0x5C58100002E70924 Fadd
    temp_210 = temp_96 + temp_202;
    // 0x000408: 0xEF94007068870B09 Ldc
    temp_211 = temp_180 + 0x688;
    temp_212 = uint(temp_211) >> 2;
    temp_213 = temp_212 >> 2;
    temp_214 = int(temp_212) & 3;
    temp_215 = vp_c7.data[int(temp_213)][temp_214];
    // 0x000410: 0x59A00D0002F7141A Ffma
    temp_216 = fma(temp_83, temp_98, temp_166);
    // 0x000418: 0xEF94007048870B14 Ldc
    temp_217 = temp_180 + 0x488;
    temp_218 = uint(temp_217) >> 2;
    temp_219 = temp_218 >> 2;
    temp_220 = int(temp_218) & 3;
    temp_221 = vp_c7.data[int(temp_219)][temp_220];
    // 0x000428: 0x5C58100001970719 Fadd
    temp_222 = temp_109 + temp_203;
    // 0x000430: 0x5C58100002071320 Fadd
    temp_223 = temp_119 + temp_207;
    // 0x000438: 0xEFD87F801407FF13 Ald
    temp_224 = in_attr12.x;
    // 0x000448: 0x5C58100002370D23 Fadd
    temp_225 = temp_128 + temp_208;
    // 0x000450: 0xEFD87F801447FF0D Ald
    temp_226 = in_attr12.y;
    // 0x000458: 0x5C58100002B71111 Fadd
    temp_227 = temp_137 + temp_209;
    // 0x000468: 0x5C68100000E72426 Fmul
    temp_228 = temp_210 * temp_171;
    // 0x000470: 0x5C68100000E7200B Fmul
    temp_229 = temp_223 * temp_171;
    // 0x000478: 0x5C58100001E71515 Fadd
    temp_230 = temp_87 + temp_206;
    // 0x000488: 0x59A0108002771021 Ffma
    temp_231 = fma(temp_133, temp_174, temp_178);
    // 0x000490: 0x5C68100000E72323 Fmul
    temp_232 = temp_225 * temp_171;
    // 0x000498: 0x59A0050002F7100A Ffma
    temp_233 = fma(temp_133, temp_98, temp_179);
    // 0x0004A8: 0x59A0130000471111 Ffma
    temp_234 = fma(temp_227, temp_176, temp_228);
    // 0x0004B0: 0x59A00B8002771217 Ffma
    temp_235 = fma(temp_115, temp_174, temp_168);
    // 0x0004B8: 0x59A0058000471910 Ffma
    temp_236 = fma(temp_222, temp_176, temp_229);
    // 0x0004C8: 0x59A0150002770807 Ffma
    temp_237 = fma(temp_92, temp_174, temp_173);
    // 0x0004D0: 0x59A0118000471523 Ffma
    temp_238 = fma(temp_230, temp_176, temp_232);
    // 0x0004D8: 0x59A0078002770C0F Ffma
    temp_239 = fma(temp_124, temp_174, temp_170);
    // 0x0004E8: 0x59A0000000271102 Ffma
    temp_240 = fma(temp_234, temp_197, temp_187);
    // 0x0004F0: 0xEFD87F800AC7FF00 Ald
    temp_241 = in_attr2.w;
    // 0x0004F8: 0x59A0028002F70808 Ffma
    temp_242 = fma(temp_92, temp_98, temp_175);
    // 0x000508: 0xEFF07F800E07FF02 Ast
    out_attr6.x = temp_240;
    // 0x000510: 0x59A0168002F7122D Ffma
    temp_243 = fma(temp_115, temp_98, temp_169);
    // 0x000518: 0xEFF07F800B07FF13 Ast
    out_attr3.x = temp_224;
    // 0x000528: 0x4C5830180B07020B Fadd
    temp_244 = 0.0 - vp_c6.data[44].x;
    temp_245 = temp_240 + temp_244;
    // 0x000530: 0xEFF07F800B47FF0D Ast
    out_attr3.y = temp_226;
    // 0x000538: 0x59A00B0002F70C0C Ffma
    temp_246 = fma(temp_124, temp_98, temp_181);
    // 0x000548: 0xEFF07F800F87FF1D Ast
    out_attr7.z = temp_97;
    // 0x000550: 0x59A0008000371001 Ffma
    temp_247 = fma(temp_236, temp_201, temp_191);
    // 0x000558: 0xEFF07F800FC7FF1B Ast
    out_attr7.w = temp_99;
    // 0x000568: 0x5C68100000E71705 Fmul
    temp_248 = temp_235 * temp_171;
    // 0x000570: 0xEFF07F800E47FF01 Ast
    out_attr6.y = temp_247;
    // 0x000578: 0x59A0048001472309 Ffma
    temp_249 = fma(temp_238, temp_221, temp_215);
    // 0x000588: 0xEFF07F800F07FF1C Ast
    out_attr7.x = temp_100;
    // 0x000590: 0x5C68100000E70803 Fmul
    temp_250 = temp_242 * temp_171;
    // 0x000598: 0xEFF07F800E87FF09 Ast
    out_attr6.z = temp_249;
    // 0x0005A8: 0x4C68101803870B11 Fmul
    temp_251 = temp_245 * vp_c6.data[14].x;
    // 0x0005B0: 0xEFF07F800F47FF18 Ast
    out_attr7.y = temp_110;
    // 0x0005B8: 0x5C68100000E70F0F Fmul
    temp_252 = temp_239 * temp_171;
    // 0x0005C8: 0x5C68100000E70707 Fmul
    temp_253 = temp_237 * temp_171;
    // 0x0005D0: 0x4C5830180B170108 Fadd
    temp_254 = 0.0 - vp_c6.data[44].y;
    temp_255 = temp_247 + temp_254;
    // 0x0005D8: 0x5C68100000E72D2D Fmul
    temp_256 = temp_243 * temp_171;
    // 0x0005E8: 0x5C68100000E70C0B Fmul
    temp_257 = temp_246 * temp_171;
    // 0x0005F0: 0x59A0028000471F1F Ffma
    temp_258 = fma(temp_204, temp_176, temp_248);
    // 0x0005F8: 0x4C5810180BA70905 Fadd
    temp_259 = temp_249 + vp_c6.data[46].z;
    // 0x000608: 0x59A0078000472222 Ffma
    temp_260 = fma(temp_192, temp_176, temp_252);
    // 0x000610: 0x59A0038000472121 Ffma
    temp_261 = fma(temp_231, temp_176, temp_253);
    // 0x000618: 0x49A0089803970811 Ffma
    temp_262 = fma(temp_255, vp_c6.data[14].y, temp_251);
    // 0x000628: 0x59A0018000470A0A Ffma
    temp_263 = fma(temp_233, temp_176, temp_250);
    // 0x000630: 0x59A0168000470606 Ffma
    temp_264 = fma(temp_205, temp_176, temp_256);
    // 0x000638: 0x59A0058000471A1A Ffma
    temp_265 = fma(temp_216, temp_176, temp_257);
    // 0x000648: 0x4C5830180B270908 Fadd
    temp_266 = 0.0 - vp_c6.data[44].z;
    temp_267 = temp_249 + temp_266;
    // 0x000650: 0x4C5810180B970104 Fadd
    temp_268 = temp_247 + vp_c6.data[46].y;
    // 0x000658: 0x4C6810180C270507 Fmul
    temp_269 = temp_259 * vp_c6.data[48].z;
    // 0x000668: 0x4C5810180B870203 Fadd
    temp_270 = temp_240 + vp_c6.data[46].x;
    // 0x000670: 0x4C98079803C7000B Mov
    // 0x000678: 0x4C58300C02F7020D Fadd
    temp_271 = 0.0 - vp_c3.data[11].w;
    temp_272 = temp_240 + temp_271;
    // 0x000688: 0x49A0089803A70811 Ffma
    temp_273 = fma(temp_267, vp_c6.data[14].z, temp_262);
    // 0x000690: 0xEFF07F800C07FF0D Ast
    out_attr4.x = temp_272;
    // 0x000698: 0x49A003980C17040C Ffma
    temp_274 = fma(temp_268, vp_c6.data[48].y, temp_269);
    // 0x0006A8: 0x5C68100002172108 Fmul
    temp_275 = temp_261 * temp_261;
    // 0x0006B0: 0x5C68100000A70A07 Fmul
    temp_276 = temp_263 * temp_263;
    // 0x0006B8: 0x4C58300C03370110 Fadd
    temp_277 = 0.0 - vp_c3.data[12].w;
    temp_278 = temp_247 + temp_277;
    // 0x0006C8: 0x4C58300C03770912 Fadd
    temp_279 = 0.0 - vp_c3.data[13].w;
    temp_280 = temp_249 + temp_279;
    // 0x0006D0: 0xEFF07F800C47FF10 Ast
    out_attr4.y = temp_278;
    // 0x0006D8: 0x49A006180C07030C Ffma
    temp_281 = fma(temp_270, vp_c6.data[48].x, temp_274);
    // 0x0006E8: 0xEFF07F800C87FF12 Ast
    out_attr4.z = temp_280;
    // 0x0006F0: 0x59A0040001F71F08 Ffma
    temp_282 = fma(temp_258, temp_258, temp_275);
    // 0x0006F8: 0x59A0038000670607 Ffma
    temp_283 = fma(temp_264, temp_264, temp_276);
    // 0x000708: 0x51A0059803B71111 Ffma
    temp_284 = fma(temp_273, vp_c6.data[15].x, vp_c6.data[14].w);
    // 0x000710: 0x4C6810180C67050B Fmul
    temp_285 = temp_259 * vp_c6.data[49].z;
    // 0x000718: 0xEFF07F801147FF11 Ast
    out_attr9.y = temp_284;
    // 0x000728: 0x4C6810180BB70C0F Fmul
    temp_286 = temp_281 * vp_c6.data[46].w;
    // 0x000730: 0x59A004000227220C Ffma
    temp_287 = fma(temp_260, temp_260, temp_282);
    // 0x000738: 0xEFF07F801207FF0F Ast
    out_attr10.x = temp_286;
    // 0x000748: 0x59A0038001A71A0D Ffma
    temp_288 = fma(temp_265, temp_265, temp_283);
    // 0x000750: 0x5080000000570C0C Mufu
    temp_289 = inversesqrt(temp_287);
    // 0x000758: 0x4C68100C00870207 Fmul
    temp_290 = temp_240 * vp_c3.data[2].x;
    // 0x000768: 0x5080000000570D0D Mufu
    temp_291 = inversesqrt(temp_288);
    // 0x000770: 0x49A005980C57040E Ffma
    temp_292 = fma(temp_268, vp_c6.data[49].y, temp_285);
    // 0x000778: 0x4C68100C00070208 Fmul
    temp_293 = temp_240 * vp_c3.data[0].x;
    // 0x000788: 0x4C68100C0047020B Fmul
    temp_294 = temp_240 * vp_c3.data[1].x;
    // 0x000790: 0x4C58101002070902 Fadd
    temp_295 = temp_249 + vp_c4.data[8].x;
    // 0x000798: 0x4C6810180CA70505 Fmul
    temp_296 = temp_259 * vp_c6.data[50].z;
    // 0x0007A8: 0x49A0038C00970107 Ffma
    temp_297 = fma(temp_247, vp_c3.data[2].y, temp_290);
    // 0x0007B0: 0x49A007180C47030E Ffma
    temp_298 = fma(temp_270, vp_c6.data[49].x, temp_292);
    // 0x0007B8: 0x49A0040C00170108 Ffma
    temp_299 = fma(temp_247, vp_c3.data[0].y, temp_293);
    // 0x0007C8: 0x49A0058C0057010B Ffma
    temp_300 = fma(temp_247, vp_c3.data[1].y, temp_294);
    // 0x0007D0: 0x5C68100000C71F1F Fmul
    temp_301 = temp_258 * temp_289;
    // 0x0007D8: 0x49A0038C00A70201 Ffma
    temp_302 = fma(temp_295, vp_c3.data[2].z, temp_297);
    // 0x0007E8: 0xEFF07F800947FF1F Ast
    out_attr1.y = temp_301;
    // 0x0007F0: 0x5C68100000D71A1A Fmul
    temp_303 = temp_265 * temp_291;
    // 0x0007F8: 0x5C68100000D70A0A Fmul
    temp_304 = temp_263 * temp_291;
    // 0x000808: 0xEFF07F800887FF1A Ast
    out_attr0.z = temp_303;
    // 0x000810: 0x5C68100000D70606 Fmul
    temp_305 = temp_264 * temp_291;
    // 0x000818: 0xEFF07F800807FF0A Ast
    out_attr0.x = temp_304;
    // 0x000828: 0x49A0038C00A7090D Ffma
    temp_306 = fma(temp_249, vp_c3.data[2].z, temp_297);
    // 0x000830: 0xEFF07F800847FF06 Ast
    out_attr0.y = temp_305;
    // 0x000838: 0x4C6810180BB70E0E Fmul
    temp_307 = temp_298 * vp_c6.data[46].w;
    // 0x000848: 0x49A0040C00270907 Ffma
    temp_308 = fma(temp_249, vp_c3.data[0].z, temp_299);
    // 0x000850: 0xEFF07F801247FF0E Ast
    out_attr10.y = temp_307;
    // 0x000858: 0x5C68100000C72121 Fmul
    temp_309 = temp_261 * temp_289;
    // 0x000868: 0x49A002980C970404 Ffma
    temp_310 = fma(temp_268, vp_c6.data[50].y, temp_296);
    // 0x000870: 0xEFF07F800907FF21 Ast
    out_attr1.x = temp_309;
    // 0x000878: 0x5C68100000C7220C Fmul
    temp_311 = temp_260 * temp_289;
    // 0x000888: 0x5C68100001A71F05 Fmul
    temp_312 = temp_301 * temp_303;
    // 0x000890: 0xEFF07F800987FF0C Ast
    out_attr1.z = temp_311;
    // 0x000898: 0x49A0040C00270208 Ffma
    temp_313 = fma(temp_295, vp_c3.data[0].z, temp_299);
    // 0x0008A8: 0x49A0058C0067090E Ffma
    temp_314 = fma(temp_249, vp_c3.data[1].z, temp_300);
    // 0x0008B0: 0x4C58100C00370709 Fadd
    temp_315 = temp_308 + vp_c3.data[0].w;
    // 0x0008B8: 0x49A002180C870307 Ffma
    temp_316 = fma(temp_270, vp_c6.data[50].x, temp_310);
    // 0x0008C8: 0x5C68100000A70C03 Fmul
    temp_317 = temp_311 * temp_304;
    // 0x0008D0: 0x59A2028000670C05 Ffma
    temp_318 = 0.0 - temp_312;
    temp_319 = fma(temp_311, temp_305, temp_318);
    // 0x0008D8: 0x5C68100000672104 Fmul
    temp_320 = temp_309 * temp_305;
    // 0x0008E8: 0x4C58100C00370808 Fadd
    temp_321 = temp_313 + vp_c3.data[0].w;
    // 0x0008F0: 0x49A0058C00670202 Ffma
    temp_322 = fma(temp_295, vp_c3.data[1].z, temp_300);
    // 0x0008F8: 0x4C58100C00770E0E Fadd
    temp_323 = temp_314 + vp_c3.data[1].w;
    // 0x000908: 0x59A2018001A72121 Ffma
    temp_324 = 0.0 - temp_317;
    temp_325 = fma(temp_309, temp_303, temp_324);
    // 0x000910: 0x5C68100000070506 Fmul
    temp_326 = temp_319 * temp_241;
    // 0x000918: 0x59A2020000A71F0A Ffma
    temp_327 = 0.0 - temp_320;
    temp_328 = fma(temp_301, temp_304, temp_327);
    // 0x000928: 0xEFF07F800A07FF06 Ast
    out_attr2.x = temp_326;
    // 0x000930: 0x4C68100C02870803 Fmul
    temp_329 = temp_321 * vp_c3.data[10].x;
    // 0x000938: 0x4C68100C02470804 Fmul
    temp_330 = temp_321 * vp_c3.data[9].x;
    // 0x000948: 0x4C68100C02070805 Fmul
    temp_331 = temp_321 * vp_c3.data[8].x;
    // 0x000950: 0x4C68101802C70909 Fmul
    temp_332 = temp_315 * vp_c6.data[11].x;
    // 0x000958: 0x4C58100C00770202 Fadd
    temp_333 = temp_322 + vp_c3.data[1].w;
    // 0x000968: 0x4C68100C01C70808 Fmul
    temp_334 = temp_321 * vp_c3.data[7].x;
    // 0x000970: 0x5C68100000072121 Fmul
    temp_335 = temp_325 * temp_241;
    // 0x000978: 0x5C68100000070A0A Fmul
    temp_336 = temp_328 * temp_241;
    // 0x000988: 0xEFF07F800A47FF21 Ast
    out_attr2.y = temp_335;
    // 0x000990: 0x4C58100C00B70D0D Fadd
    temp_337 = temp_306 + vp_c3.data[2].w;
    // 0x000998: 0xEFF07F800A87FF0A Ast
    out_attr2.z = temp_336;
    // 0x0009A8: 0x49A0049802D70E0E Ffma
    temp_338 = fma(temp_323, vp_c6.data[11].y, temp_332);
    // 0x0009B0: 0xEFF07F800D87FF0D Ast
    out_attr5.z = temp_337;
    // 0x0009B8: 0x4C58100C00B70101 Fadd
    temp_339 = temp_302 + vp_c3.data[2].w;
    // 0x0009C8: 0x49A0018C02970203 Ffma
    temp_340 = fma(temp_333, vp_c3.data[10].y, temp_329);
    // 0x0009D0: 0x49A0020C02570204 Ffma
    temp_341 = fma(temp_333, vp_c3.data[9].y, temp_330);
    // 0x0009D8: 0x49A0028C02170200 Ffma
    temp_342 = fma(temp_333, vp_c3.data[8].y, temp_331);
    // 0x0009E8: 0x49A0040C01D70208 Ffma
    temp_343 = fma(temp_333, vp_c3.data[7].y, temp_334);
    // 0x0009F0: 0x49A0071802E70D0E Ffma
    temp_344 = fma(temp_337, vp_c6.data[11].z, temp_338);
    // 0x0009F8: 0x4C98079803070009 Mov
    // 0x000A08: 0x49A0018C02A70103 Ffma
    temp_345 = fma(temp_339, vp_c3.data[10].z, temp_340);
    // 0x000A10: 0x49A0020C02670104 Ffma
    temp_346 = fma(temp_339, vp_c3.data[9].z, temp_341);
    // 0x000A18: 0x49A0000C02270100 Ffma
    temp_347 = fma(temp_339, vp_c3.data[8].z, temp_342);
    // 0x000A28: 0x49A0040C01E70108 Ffma
    temp_348 = fma(temp_339, vp_c3.data[7].z, temp_343);
    // 0x000A30: 0x4C6810180BB70707 Fmul
    temp_349 = temp_316 * vp_c6.data[46].w;
    // 0x000A38: 0x51A0049802F70E0E Ffma
    temp_350 = fma(temp_344, vp_c6.data[12].x, vp_c6.data[11].w);
    // 0x000A48: 0xEFF07F801287FF07 Ast
    out_attr10.z = temp_349;
    // 0x000A50: 0x4C58100C02B70303 Fadd
    temp_351 = temp_345 + vp_c3.data[10].w;
    // 0x000A58: 0xEFF07F801107FF0E Ast
    out_attr9.x = temp_350;
    // 0x000A68: 0x4C58100C02770404 Fadd
    temp_352 = temp_346 + vp_c3.data[9].w;
    // 0x000A70: 0xEFF07F8007C7FF03 Ast
    gl_Position.w = temp_351;
    // 0x000A78: 0x4C58100C02370000 Fadd
    temp_353 = temp_347 + vp_c3.data[8].w;
    // 0x000A88: 0xEFF07F800787FF04 Ast
    gl_Position.z = temp_352;
    // 0x000A90: 0x4C58100C01F70808 Fadd
    temp_354 = temp_348 + vp_c3.data[7].w;
    // 0x000A98: 0xEFF07F800747FF00 Ast
    gl_Position.y = temp_353;
    // 0x000AA8: 0xEFF07F800707FF08 Ast
    gl_Position.x = temp_354;
    // 0x000AB0: 0xE30000000007000F Exit
    return;
}
