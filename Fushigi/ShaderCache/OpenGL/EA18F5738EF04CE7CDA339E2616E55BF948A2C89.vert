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
    int temp_4;
    int temp_5;
    int temp_6;
    precise float temp_7;
    int temp_8;
    int temp_9;
    int temp_10;
    precise float temp_11;
    uint temp_12;
    int temp_13;
    int temp_14;
    int temp_15;
    precise float temp_16;
    int temp_17;
    int temp_18;
    int temp_19;
    uint temp_20;
    uint temp_21;
    int temp_22;
    precise float temp_23;
    int temp_24;
    uint temp_25;
    int temp_26;
    precise float temp_27;
    uint temp_28;
    int temp_29;
    int temp_30;
    int temp_31;
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
    int temp_42;
    int temp_43;
    int temp_44;
    int temp_45;
    uint temp_46;
    uint temp_47;
    int temp_48;
    precise float temp_49;
    int temp_50;
    uint temp_51;
    int temp_52;
    precise float temp_53;
    uint temp_54;
    uint temp_55;
    int temp_56;
    precise float temp_57;
    int temp_58;
    uint temp_59;
    int temp_60;
    precise float temp_61;
    uint temp_62;
    uint temp_63;
    int temp_64;
    precise float temp_65;
    int temp_66;
    uint temp_67;
    int temp_68;
    precise float temp_69;
    int temp_70;
    uint temp_71;
    uint temp_72;
    int temp_73;
    precise float temp_74;
    int temp_75;
    uint temp_76;
    int temp_77;
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
    uint temp_97;
    uint temp_98;
    int temp_99;
    precise float temp_100;
    int temp_101;
    uint temp_102;
    int temp_103;
    precise float temp_104;
    precise float temp_105;
    precise float temp_106;
    precise float temp_107;
    precise float temp_108;
    int temp_109;
    uint temp_110;
    uint temp_111;
    int temp_112;
    precise float temp_113;
    int temp_114;
    uint temp_115;
    int temp_116;
    precise float temp_117;
    precise float temp_118;
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
    precise float temp_129;
    precise float temp_130;
    int temp_131;
    uint temp_132;
    uint temp_133;
    int temp_134;
    precise float temp_135;
    int temp_136;
    uint temp_137;
    int temp_138;
    precise float temp_139;
    int temp_140;
    uint temp_141;
    uint temp_142;
    int temp_143;
    precise float temp_144;
    int temp_145;
    uint temp_146;
    int temp_147;
    precise float temp_148;
    int temp_149;
    uint temp_150;
    uint temp_151;
    int temp_152;
    precise float temp_153;
    int temp_154;
    uint temp_155;
    int temp_156;
    precise float temp_157;
    int temp_158;
    uint temp_159;
    uint temp_160;
    int temp_161;
    precise float temp_162;
    int temp_163;
    uint temp_164;
    int temp_165;
    precise float temp_166;
    int temp_167;
    uint temp_168;
    uint temp_169;
    int temp_170;
    precise float temp_171;
    int temp_172;
    uint temp_173;
    int temp_174;
    precise float temp_175;
    int temp_176;
    uint temp_177;
    uint temp_178;
    int temp_179;
    precise float temp_180;
    int temp_181;
    uint temp_182;
    int temp_183;
    precise float temp_184;
    precise float temp_185;
    precise float temp_186;
    precise float temp_187;
    precise float temp_188;
    precise float temp_189;
    precise float temp_190;
    precise float temp_191;
    precise float temp_192;
    precise float temp_193;
    precise float temp_194;
    precise float temp_195;
    precise float temp_196;
    precise float temp_197;
    int temp_198;
    uint temp_199;
    uint temp_200;
    int temp_201;
    precise float temp_202;
    int temp_203;
    uint temp_204;
    int temp_205;
    precise float temp_206;
    precise float temp_207;
    precise float temp_208;
    precise float temp_209;
    precise float temp_210;
    precise float temp_211;
    precise float temp_212;
    precise float temp_213;
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
    int temp_254;
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
    int temp_274;
    precise float temp_275;
    precise float temp_276;
    precise float temp_277;
    precise float temp_278;
    precise float temp_279;
    int temp_280;
    uint temp_281;
    uint temp_282;
    int temp_283;
    precise float temp_284;
    precise float temp_285;
    int temp_286;
    uint temp_287;
    uint temp_288;
    int temp_289;
    precise float temp_290;
    precise float temp_291;
    precise float temp_292;
    precise float temp_293;
    precise float temp_294;
    precise float temp_295;
    int temp_296;
    uint temp_297;
    uint temp_298;
    int temp_299;
    precise float temp_300;
    int temp_301;
    uint temp_302;
    int temp_303;
    precise float temp_304;
    precise float temp_305;
    int temp_306;
    uint temp_307;
    uint temp_308;
    int temp_309;
    precise float temp_310;
    int temp_311;
    uint temp_312;
    int temp_313;
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
    precise float temp_355;
    precise float temp_356;
    precise float temp_357;
    precise float temp_358;
    precise float temp_359;
    precise float temp_360;
    precise float temp_361;
    precise float temp_362;
    precise float temp_363;
    precise float temp_364;
    precise float temp_365;
    precise float temp_366;
    precise float temp_367;
    precise float temp_368;
    precise float temp_369;
    precise float temp_370;
    precise float temp_371;
    precise float temp_372;
    precise float temp_373;
    precise float temp_374;
    precise float temp_375;
    precise float temp_376;
    precise float temp_377;
    precise float temp_378;
    precise float temp_379;
    precise float temp_380;
    precise float temp_381;
    precise float temp_382;
    precise float temp_383;
    precise float temp_384;
    precise float temp_385;
    precise float temp_386;
    precise float temp_387;
    precise float temp_388;
    precise float temp_389;
    precise float temp_390;
    precise float temp_391;
    precise float temp_392;
    precise float temp_393;
    precise float temp_394;
    precise float temp_395;
    precise float temp_396;
    precise float temp_397;
    precise float temp_398;
    precise float temp_399;
    precise float temp_400;
    precise float temp_401;
    precise float temp_402;
    precise float temp_403;
    precise float temp_404;
    precise float temp_405;
    precise float temp_406;
    precise float temp_407;
    precise float temp_408;
    precise float temp_409;
    precise float temp_410;
    precise float temp_411;
    precise float temp_412;
    precise float temp_413;
    precise float temp_414;
    precise float temp_415;
    precise float temp_416;
    precise float temp_417;
    precise float temp_418;
    precise float temp_419;
    precise float temp_420;
    precise float temp_421;
    precise float temp_422;
    precise float temp_423;
    precise float temp_424;
    precise float temp_425;
    precise float temp_426;
    precise float temp_427;
    precise float temp_428;
    precise float temp_429;
    precise float temp_430;
    precise float temp_431;
    precise float temp_432;
    precise float temp_433;
    precise float temp_434;
    precise float temp_435;
    precise float temp_436;
    precise float temp_437;
    precise float temp_438;
    precise float temp_439;
    precise float temp_440;
    precise float temp_441;
    precise float temp_442;
    precise float temp_443;
    precise float temp_444;
    precise float temp_445;
    precise float temp_446;
    precise float temp_447;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    // 0x000008: 0x010000000207F01A Mov32i
    // 0x000010: 0xEFD87F800E07FF00 Ald
    temp_0 = in_attr6.x;
    // 0x000018: 0x010000000107F03D Mov32i
    // 0x000028: 0xEFD87F800E47FF02 Ald
    temp_1 = in_attr6.y;
    // 0x000030: 0x4C98079400270025 Mov
    // 0x000038: 0xEFD87F800E87FF03 Ald
    temp_2 = in_attr6.z;
    // 0x000048: 0x4C98079400370013 Mov
    // 0x000050: 0xEFD87F801047FF24 Ald
    temp_3 = in_attr8.y;
    // 0x000058: 0x36000D000307001A Xmad
    temp_4 = floatBitsToInt(temp_0) & 0xFFFF;
    temp_5 = temp_4 * 48;
    temp_6 = temp_5 + 32;
    // 0x000068: 0xEFD87F801007FF12 Ald
    temp_7 = in_attr8.x;
    // 0x000070: 0x36001E800307023D Xmad
    temp_8 = floatBitsToInt(temp_1) & 0xFFFF;
    temp_9 = temp_8 * 48;
    temp_10 = temp_9 + 16;
    // 0x000078: 0xEFD87F800807FF17 Ald
    temp_11 = in_attr0.x;
    // 0x000088: 0x36200D100307001A Xmad
    temp_12 = floatBitsToUint(temp_0) >> 16;
    temp_13 = int(temp_12) * 48;
    temp_14 = temp_13 << 16;
    temp_15 = temp_14 + temp_6;
    // 0x000090: 0xEFD87F800A07FF3F Ald
    temp_16 = in_attr2.x;
    // 0x000098: 0x36007F8003070322 Xmad
    temp_17 = floatBitsToInt(temp_2) & 0xFFFF;
    temp_18 = temp_17 * 48;
    // 0x0000A8: 0xEF95008FFE071A00 Ldc
    temp_19 = temp_15 + -32;
    temp_20 = uint(temp_19) >> 2;
    temp_21 = temp_20 >> 2;
    temp_22 = int(temp_20) & 3;
    temp_23 = vp_c8.data[int(temp_21)][temp_22];
    temp_24 = int(temp_20) + 1;
    temp_25 = uint(temp_24) >> 2;
    temp_26 = temp_24 & 3;
    temp_27 = vp_c8.data[int(temp_25)][temp_26];
    // 0x0000B0: 0x36201E900307023D Xmad
    temp_28 = floatBitsToUint(temp_1) >> 16;
    temp_29 = int(temp_28) * 48;
    temp_30 = temp_29 << 16;
    temp_31 = temp_30 + temp_10;
    // 0x0000B8: 0xEF95008FFF071A0E Ldc
    temp_32 = temp_15 + -16;
    temp_33 = uint(temp_32) >> 2;
    temp_34 = temp_33 >> 2;
    temp_35 = int(temp_33) & 3;
    temp_36 = vp_c8.data[int(temp_34)][temp_35];
    temp_37 = int(temp_33) + 1;
    temp_38 = uint(temp_37) >> 2;
    temp_39 = temp_37 & 3;
    temp_40 = vp_c8.data[int(temp_38)][temp_39];
    // 0x0000C8: 0x3620111003070322 Xmad
    temp_41 = floatBitsToUint(temp_2) >> 16;
    temp_42 = int(temp_41) * 48;
    temp_43 = temp_42 << 16;
    temp_44 = temp_43 + temp_18;
    // 0x0000D0: 0xEF95008FFF073D04 Ldc
    temp_45 = temp_31 + -16;
    temp_46 = uint(temp_45) >> 2;
    temp_47 = temp_46 >> 2;
    temp_48 = int(temp_46) & 3;
    temp_49 = vp_c8.data[int(temp_47)][temp_48];
    temp_50 = int(temp_46) + 1;
    temp_51 = uint(temp_50) >> 2;
    temp_52 = temp_50 & 3;
    temp_53 = vp_c8.data[int(temp_51)][temp_52];
    // 0x0000D8: 0xEF95008000073D06 Ldc
    temp_54 = uint(temp_31) >> 2;
    temp_55 = temp_54 >> 2;
    temp_56 = int(temp_54) & 3;
    temp_57 = vp_c8.data[int(temp_55)][temp_56];
    temp_58 = int(temp_54) + 1;
    temp_59 = uint(temp_58) >> 2;
    temp_60 = temp_58 & 3;
    temp_61 = vp_c8.data[int(temp_59)][temp_60];
    // 0x0000E8: 0xEF95008000071A0C Ldc
    temp_62 = uint(temp_15) >> 2;
    temp_63 = temp_62 >> 2;
    temp_64 = int(temp_62) & 3;
    temp_65 = vp_c8.data[int(temp_63)][temp_64];
    temp_66 = int(temp_62) + 1;
    temp_67 = uint(temp_66) >> 2;
    temp_68 = temp_66 & 3;
    temp_69 = vp_c8.data[int(temp_67)][temp_68];
    // 0x0000F0: 0xEF95008001073D0A Ldc
    temp_70 = temp_31 + 16;
    temp_71 = uint(temp_70) >> 2;
    temp_72 = temp_71 >> 2;
    temp_73 = int(temp_71) & 3;
    temp_74 = vp_c8.data[int(temp_72)][temp_73];
    temp_75 = int(temp_71) + 1;
    temp_76 = uint(temp_75) >> 2;
    temp_77 = temp_75 & 3;
    temp_78 = vp_c8.data[int(temp_76)][temp_77];
    // 0x0000F8: 0xEF95008001072202 Ldc
    temp_79 = temp_44 + 16;
    temp_80 = uint(temp_79) >> 2;
    temp_81 = temp_80 >> 2;
    temp_82 = int(temp_80) & 3;
    temp_83 = vp_c8.data[int(temp_81)][temp_82];
    temp_84 = int(temp_80) + 1;
    temp_85 = uint(temp_84) >> 2;
    temp_86 = temp_84 & 3;
    temp_87 = vp_c8.data[int(temp_85)][temp_86];
    // 0x000108: 0xEF95008002072208 Ldc
    temp_88 = temp_44 + 32;
    temp_89 = uint(temp_88) >> 2;
    temp_90 = temp_89 >> 2;
    temp_91 = int(temp_89) & 3;
    temp_92 = vp_c8.data[int(temp_90)][temp_91];
    temp_93 = int(temp_89) + 1;
    temp_94 = uint(temp_93) >> 2;
    temp_95 = temp_93 & 3;
    temp_96 = vp_c8.data[int(temp_94)][temp_95];
    // 0x000110: 0xEF95008000072210 Ldc
    temp_97 = uint(temp_44) >> 2;
    temp_98 = temp_97 >> 2;
    temp_99 = int(temp_97) & 3;
    temp_100 = vp_c8.data[int(temp_98)][temp_99];
    temp_101 = int(temp_97) + 1;
    temp_102 = uint(temp_101) >> 2;
    temp_103 = temp_101 & 3;
    temp_104 = vp_c8.data[int(temp_102)][temp_103];
    // 0x000118: 0x51A0129400472425 Ffma
    temp_105 = fma(temp_3, vp_c5.data[0].z, vp_c5.data[1].x);
    // 0x000128: 0xEFD87F800907FF27 Ald
    temp_106 = in_attr1.x;
    // 0x000130: 0x51A0099400572424 Ffma
    temp_107 = fma(temp_3, vp_c5.data[0].w, vp_c5.data[1].y);
    // 0x000138: 0xEFD87F800847FF26 Ald
    temp_108 = in_attr0.y;
    // 0x000148: 0xEF9500800187221E Ldc
    temp_109 = temp_44 + 24;
    temp_110 = uint(temp_109) >> 2;
    temp_111 = temp_110 >> 2;
    temp_112 = int(temp_110) & 3;
    temp_113 = vp_c8.data[int(temp_111)][temp_112];
    temp_114 = int(temp_110) + 1;
    temp_115 = uint(temp_114) >> 2;
    temp_116 = temp_114 & 3;
    temp_117 = vp_c8.data[int(temp_115)][temp_116];
    // 0x000150: 0x49A0129400071225 Ffma
    temp_118 = fma(temp_7, vp_c5.data[0].x, temp_105);
    // 0x000158: 0xEFD87F800A47FF2A Ald
    temp_119 = in_attr2.y;
    // 0x000168: 0xEF95008FFF871A14 Ldc
    temp_120 = temp_15 + -8;
    temp_121 = uint(temp_120) >> 2;
    temp_122 = temp_121 >> 2;
    temp_123 = int(temp_121) & 3;
    temp_124 = vp_c8.data[int(temp_122)][temp_123];
    temp_125 = int(temp_121) + 1;
    temp_126 = uint(temp_125) >> 2;
    temp_127 = temp_125 & 3;
    temp_128 = vp_c8.data[int(temp_126)][temp_127];
    // 0x000170: 0x49A0121400171224 Ffma
    temp_129 = fma(temp_7, vp_c5.data[0].y, temp_107);
    // 0x000178: 0xEFD87F800947FF38 Ald
    temp_130 = in_attr1.y;
    // 0x000188: 0xEF95008FFE871A12 Ldc
    temp_131 = temp_15 + -24;
    temp_132 = uint(temp_131) >> 2;
    temp_133 = temp_132 >> 2;
    temp_134 = int(temp_132) & 3;
    temp_135 = vp_c8.data[int(temp_133)][temp_134];
    temp_136 = int(temp_132) + 1;
    temp_137 = uint(temp_136) >> 2;
    temp_138 = temp_136 & 3;
    temp_139 = vp_c8.data[int(temp_137)][temp_138];
    // 0x000190: 0xEF95008002872220 Ldc
    temp_140 = temp_44 + 40;
    temp_141 = uint(temp_140) >> 2;
    temp_142 = temp_141 >> 2;
    temp_143 = int(temp_141) & 3;
    temp_144 = vp_c8.data[int(temp_142)][temp_143];
    temp_145 = int(temp_141) + 1;
    temp_146 = uint(temp_145) >> 2;
    temp_147 = temp_145 & 3;
    temp_148 = vp_c8.data[int(temp_146)][temp_147];
    // 0x000198: 0xEF95008000873D18 Ldc
    temp_149 = temp_31 + 8;
    temp_150 = uint(temp_149) >> 2;
    temp_151 = temp_150 >> 2;
    temp_152 = int(temp_150) & 3;
    temp_153 = vp_c8.data[int(temp_151)][temp_152];
    temp_154 = int(temp_150) + 1;
    temp_155 = uint(temp_154) >> 2;
    temp_156 = temp_154 & 3;
    temp_157 = vp_c8.data[int(temp_155)][temp_156];
    // 0x0001A8: 0xEF95008001873D1C Ldc
    temp_158 = temp_31 + 24;
    temp_159 = uint(temp_158) >> 2;
    temp_160 = temp_159 >> 2;
    temp_161 = int(temp_159) & 3;
    temp_162 = vp_c8.data[int(temp_160)][temp_161];
    temp_163 = int(temp_159) + 1;
    temp_164 = uint(temp_163) >> 2;
    temp_165 = temp_163 & 3;
    temp_166 = vp_c8.data[int(temp_164)][temp_165];
    // 0x0001B0: 0xEF95008000871A1A Ldc
    temp_167 = temp_15 + 8;
    temp_168 = uint(temp_167) >> 2;
    temp_169 = temp_168 >> 2;
    temp_170 = int(temp_168) & 3;
    temp_171 = vp_c8.data[int(temp_169)][temp_170];
    temp_172 = int(temp_168) + 1;
    temp_173 = uint(temp_172) >> 2;
    temp_174 = temp_172 & 3;
    temp_175 = vp_c8.data[int(temp_173)][temp_174];
    // 0x0001B8: 0xEF95008000872222 Ldc
    temp_176 = temp_44 + 8;
    temp_177 = uint(temp_176) >> 2;
    temp_178 = temp_177 >> 2;
    temp_179 = int(temp_177) & 3;
    temp_180 = vp_c8.data[int(temp_178)][temp_179];
    temp_181 = int(temp_177) + 1;
    temp_182 = uint(temp_181) >> 2;
    temp_183 = temp_181 & 3;
    temp_184 = vp_c8.data[int(temp_182)][temp_183];
    // 0x0001C8: 0x5C6810000177002B Fmul
    temp_185 = temp_23 * temp_11;
    // 0x0001D0: 0x5C68100001770E2C Fmul
    temp_186 = temp_36 * temp_11;
    // 0x0001D8: 0x5C68100003F70028 Fmul
    temp_187 = temp_23 * temp_16;
    // 0x0001E8: 0x5C68100002770000 Fmul
    temp_188 = temp_23 * temp_106;
    // 0x0001F0: 0x5C68100003F70E29 Fmul
    temp_189 = temp_36 * temp_16;
    // 0x0001F8: 0x5C68100002770E2E Fmul
    temp_190 = temp_36 * temp_106;
    // 0x000208: 0x5C68100001770437 Fmul
    temp_191 = temp_49 * temp_11;
    // 0x000210: 0x5C68100001770631 Fmul
    temp_192 = temp_57 * temp_11;
    // 0x000218: 0x5C68100001770C33 Fmul
    temp_193 = temp_65 * temp_11;
    // 0x000228: 0x5C68100001770A2D Fmul
    temp_194 = temp_74 * temp_11;
    // 0x000230: 0x5C68100001770234 Fmul
    temp_195 = temp_83 * temp_11;
    // 0x000238: 0x5C6810000177082F Fmul
    temp_196 = temp_92 * temp_11;
    // 0x000248: 0x5C68100001771030 Fmul
    temp_197 = temp_100 * temp_11;
    // 0x000250: 0xEF95008FFF873D16 Ldc
    temp_198 = temp_31 + -8;
    temp_199 = uint(temp_198) >> 2;
    temp_200 = temp_199 >> 2;
    temp_201 = int(temp_199) & 3;
    temp_202 = vp_c8.data[int(temp_200)][temp_201];
    temp_203 = int(temp_199) + 1;
    temp_204 = uint(temp_203) >> 2;
    temp_205 = temp_203 & 3;
    temp_206 = vp_c8.data[int(temp_204)][temp_205];
    // 0x000258: 0x5C68100003F7043B Fmul
    temp_207 = temp_49 * temp_16;
    // 0x000268: 0x5C6810000277043E Fmul
    temp_208 = temp_49 * temp_106;
    // 0x000270: 0x5C6810000277020E Fmul
    temp_209 = temp_83 * temp_106;
    // 0x000278: 0x5C68100003F70235 Fmul
    temp_210 = temp_83 * temp_16;
    // 0x000288: 0x5C68100003F7063C Fmul
    temp_211 = temp_57 * temp_16;
    // 0x000290: 0x5C68100003F70A39 Fmul
    temp_212 = temp_74 * temp_16;
    // 0x000298: 0x59A0158002670104 Ffma
    temp_213 = fma(temp_27, temp_108, temp_185);
    // 0x0002A8: 0x5C68100002770802 Fmul
    temp_214 = temp_92 * temp_106;
    // 0x0002B0: 0x5C68100002771036 Fmul
    temp_215 = temp_100 * temp_106;
    // 0x0002B8: 0x5C68100002770C3A Fmul
    temp_216 = temp_65 * temp_106;
    // 0x0002C8: 0x5C68100002770A0A Fmul
    temp_217 = temp_74 * temp_106;
    // 0x0002D0: 0x5C68100002770606 Fmul
    temp_218 = temp_57 * temp_106;
    // 0x0002D8: 0xEFD87F800887FF27 Ald
    temp_219 = in_attr0.z;
    // 0x0002E8: 0x59A0140002A70128 Ffma
    temp_220 = fma(temp_27, temp_119, temp_187);
    // 0x0002F0: 0x59A0000003870100 Ffma
    temp_221 = fma(temp_27, temp_130, temp_188);
    // 0x0002F8: 0xEFD87F800A87FF01 Ald
    temp_222 = in_attr2.z;
    // 0x000308: 0x59A0160002670F3D Ffma
    temp_223 = fma(temp_40, temp_108, temp_186);
    // 0x000310: 0x59A0148002A70F2B Ffma
    temp_224 = fma(temp_40, temp_119, temp_189);
    // 0x000318: 0x59A0170003870F2E Ffma
    temp_225 = fma(temp_40, temp_130, temp_190);
    // 0x000328: 0xEFD87F800987FF0F Ald
    temp_226 = in_attr1.z;
    // 0x000330: 0x59A01A0002670334 Ffma
    temp_227 = fma(temp_87, temp_108, temp_195);
    // 0x000338: 0x59A007000387032C Ffma
    temp_228 = fma(temp_87, temp_130, temp_209);
    // 0x000348: 0x59A01A8002A70303 Ffma
    temp_229 = fma(temp_87, temp_119, temp_210);
    // 0x000350: 0x5C68100003F70808 Fmul
    temp_230 = temp_92 * temp_16;
    // 0x000358: 0x5C68100003F70C32 Fmul
    temp_231 = temp_65 * temp_16;
    // 0x000368: 0x5C68100003F7103F Fmul
    temp_232 = temp_100 * temp_16;
    // 0x000370: 0x59A0198002670D10 Ffma
    temp_233 = fma(temp_69, temp_108, temp_193);
    // 0x000378: 0x59A0178002670929 Ffma
    temp_234 = fma(temp_96, temp_108, temp_196);
    // 0x000388: 0x59A0010003870902 Ffma
    temp_235 = fma(temp_96, temp_130, temp_214);
    // 0x000390: 0x59A0040002A7090E Ffma
    temp_236 = fma(temp_96, temp_119, temp_230);
    // 0x000398: 0x59A01B800267050C Ffma
    temp_237 = fma(temp_53, temp_108, temp_191);
    // 0x0003A8: 0x59A0188002670731 Ffma
    temp_238 = fma(temp_61, temp_108, temp_192);
    // 0x0003B0: 0x59A0168002670B2D Ffma
    temp_239 = fma(temp_78, temp_108, temp_194);
    // 0x0003B8: 0x59A0180002671130 Ffma
    temp_240 = fma(temp_104, temp_108, temp_197);
    // 0x0003C8: 0x59A01E0002A70726 Ffma
    temp_241 = fma(temp_61, temp_119, temp_211);
    // 0x0003D0: 0x59A0020002771204 Ffma
    temp_242 = fma(temp_135, temp_219, temp_213);
    // 0x0003D8: 0x59A01A0002771E34 Ffma
    temp_243 = fma(temp_113, temp_219, temp_227);
    // 0x0003E8: 0x59A0080002771A09 Ffma
    temp_244 = fma(temp_171, temp_219, temp_233);
    // 0x0003F0: 0x59A01D8002A7053B Ffma
    temp_245 = fma(temp_53, temp_119, temp_207);
    // 0x0003F8: 0x59A0140000171228 Ffma
    temp_246 = fma(temp_135, temp_222, temp_220);
    // 0x000408: 0x59A0018000171E03 Ffma
    temp_247 = fma(temp_113, temp_222, temp_229);
    // 0x000410: 0x59A01C8002A70B2F Ffma
    temp_248 = fma(temp_78, temp_119, temp_212);
    // 0x000418: 0x59A0190002A70D08 Ffma
    temp_249 = fma(temp_69, temp_119, temp_231);
    // 0x000428: 0x59A0000000F71200 Ffma
    temp_250 = fma(temp_135, temp_226, temp_221);
    // 0x000430: 0xEFD87F800C47FF12 Ald
    temp_251 = in_attr4.y;
    // 0x000438: 0x59A0160000F71E2C Ffma
    temp_252 = fma(temp_113, temp_226, temp_228);
    // 0x000448: 0x4CB0119002371A1E F2i
    temp_253 = trunc(vp_c4.data[8].w);
    temp_254 = int(temp_253);
    // 0x000450: 0x59A01F8002A7113F Ffma
    temp_255 = fma(temp_104, temp_119, temp_232);
    // 0x000458: 0x59A0148002772010 Ffma
    temp_256 = fma(temp_144, temp_219, temp_234);
    // 0x000468: 0xEFD87F800C07FF29 Ald
    temp_257 = in_attr4.x;
    // 0x000470: 0x59A0050003870B0A Ffma
    temp_258 = fma(temp_78, temp_130, temp_217);
    // 0x000478: 0x59A0030003870706 Ffma
    temp_259 = fma(temp_61, temp_130, temp_218);
    // 0x000488: 0x59A0010000F72002 Ffma
    temp_260 = fma(temp_144, temp_226, temp_235);
    // 0x000490: 0x59A007000017200E Ffma
    temp_261 = fma(temp_144, temp_222, temp_236);
    // 0x000498: 0x59A01E8002771407 Ffma
    temp_262 = fma(temp_124, temp_219, temp_223);
    // 0x0004A8: 0x59A015800017142B Ffma
    temp_263 = fma(temp_124, temp_222, temp_224);
    // 0x0004B0: 0x59A0170000F7142E Ffma
    temp_264 = fma(temp_124, temp_226, temp_225);
    // 0x0004B8: 0x59A006000277160C Ffma
    temp_265 = fma(temp_202, temp_219, temp_237);
    // 0x0004C8: 0x59A0130000171820 Ffma
    temp_266 = fma(temp_153, temp_222, temp_241);
    // 0x0004D0: 0x59A01D800017163B Ffma
    temp_267 = fma(temp_202, temp_222, temp_245);
    // 0x0004D8: 0x59A0178000171C2F Ffma
    temp_268 = fma(temp_162, temp_222, temp_248);
    // 0x0004E8: 0x59A0040000171A08 Ffma
    temp_269 = fma(temp_171, temp_222, temp_249);
    // 0x0004F0: 0x59A01F800017223F Ffma
    temp_270 = fma(temp_180, temp_222, temp_255);
    // 0x0004F8: 0xEFD87F800C87FF01 Ald
    temp_271 = in_attr4.z;
    // 0x000508: 0x59A0168002771C14 Ffma
    temp_272 = fma(temp_162, temp_219, temp_239);
    // 0x000510: 0x59A01D0003870D0D Ffma
    temp_273 = fma(temp_69, temp_130, temp_216);
    // 0x000518: 0x3848000000471E1E Shl
    temp_274 = temp_254 << 4;
    // 0x000528: 0x59A01B0003871111 Ffma
    temp_275 = fma(temp_104, temp_130, temp_215);
    // 0x000530: 0x59A01F0003870505 Ffma
    temp_276 = fma(temp_53, temp_130, temp_208);
    // 0x000538: 0x59A0050000F71C1C Ffma
    temp_277 = fma(temp_162, temp_226, temp_258);
    // 0x000548: 0x59A018800277180B Ffma
    temp_278 = fma(temp_153, temp_219, temp_238);
    // 0x000550: 0x5C5810000077150A Fadd
    temp_279 = temp_128 + temp_262;
    // 0x000558: 0xEF94007068871E15 Ldc
    temp_280 = temp_274 + 0x688;
    temp_281 = uint(temp_280) >> 2;
    temp_282 = temp_281 >> 2;
    temp_283 = int(temp_281) & 3;
    temp_284 = vp_c7.data[int(temp_282)][temp_283];
    // 0x000568: 0x5C58100000C7170C Fadd
    temp_285 = temp_206 + temp_265;
    // 0x000570: 0xEF94007048871E17 Ldc
    temp_286 = temp_274 + 0x488;
    temp_287 = uint(temp_286) >> 2;
    temp_288 = temp_287 >> 2;
    temp_289 = int(temp_287) & 3;
    temp_290 = vp_c7.data[int(temp_288)][temp_289];
    // 0x000578: 0x5C58100001471D14 Fadd
    temp_291 = temp_166 + temp_272;
    // 0x000588: 0x59A0068000F71A1A Ffma
    temp_292 = fma(temp_171, temp_226, temp_273);
    // 0x000590: 0x59A0088000F72211 Ffma
    temp_293 = fma(temp_180, temp_226, temp_275);
    // 0x000598: 0x59A0028000F7160D Ffma
    temp_294 = fma(temp_202, temp_226, temp_276);
    // 0x0005A8: 0x59A0030000F7180F Ffma
    temp_295 = fma(temp_153, temp_226, temp_259);
    // 0x0005B0: 0xEF95007048071E06 Ldc
    temp_296 = temp_274 + 0x480;
    temp_297 = uint(temp_296) >> 2;
    temp_298 = temp_297 >> 2;
    temp_299 = int(temp_297) & 3;
    temp_300 = vp_c7.data[int(temp_298)][temp_299];
    temp_301 = int(temp_297) + 1;
    temp_302 = uint(temp_301) >> 2;
    temp_303 = temp_301 & 3;
    temp_304 = vp_c7.data[int(temp_302)][temp_303];
    // 0x0005B8: 0x5C58100000471313 Fadd
    temp_305 = temp_139 + temp_242;
    // 0x0005C8: 0xEF95007068071E04 Ldc
    temp_306 = temp_274 + 0x680;
    temp_307 = uint(temp_306) >> 2;
    temp_308 = temp_307 >> 2;
    temp_309 = int(temp_307) & 3;
    temp_310 = vp_c7.data[int(temp_308)][temp_309];
    temp_311 = int(temp_307) + 1;
    temp_312 = uint(temp_311) >> 2;
    temp_313 = temp_311 & 3;
    temp_314 = vp_c7.data[int(temp_312)][temp_313];
    // 0x0005D0: 0x5C58100000B7190B Fadd
    temp_315 = temp_157 + temp_278;
    // 0x0005D8: 0x5C58100000971B1B Fadd
    temp_316 = temp_175 + temp_244;
    // 0x0005E8: 0x5C68100001271414 Fmul
    temp_317 = temp_291 * temp_251;
    // 0x0005F0: 0x5C58100001072116 Fadd
    temp_318 = temp_148 + temp_256;
    // 0x0005F8: 0x59A0180002772230 Ffma
    temp_319 = fma(temp_180, temp_219, temp_240);
    // 0x000608: 0x5C58100003471F1F Fadd
    temp_320 = temp_117 + temp_243;
    // 0x000610: 0x5C68100001270B0B Fmul
    temp_321 = temp_315 * temp_251;
    // 0x000618: 0x5C68100001272F2F Fmul
    temp_322 = temp_268 * temp_251;
    // 0x000628: 0x59A00A0002971B14 Ffma
    temp_323 = fma(temp_316, temp_257, temp_317);
    // 0x000630: 0x5C68100001270C0C Fmul
    temp_324 = temp_285 * temp_251;
    // 0x000638: 0x5C58100003072323 Fadd
    temp_325 = temp_184 + temp_319;
    // 0x000648: 0x5C68100001273B3B Fmul
    temp_326 = temp_267 * temp_251;
    // 0x000650: 0x59A0058002970A0A Ffma
    temp_327 = fma(temp_279, temp_257, temp_321);
    // 0x000658: 0x59A017800297082F Ffma
    temp_328 = fma(temp_269, temp_257, temp_322);
    // 0x000668: 0x59A00A0000171614 Ffma
    temp_329 = fma(temp_318, temp_271, temp_323);
    // 0x000670: 0x59A006000297130C Ffma
    temp_330 = fma(temp_305, temp_257, temp_324);
    // 0x000678: 0x5C68100001270D1B Fmul
    temp_331 = temp_294 * temp_251;
    // 0x000688: 0x5C68100001271C1C Fmul
    temp_332 = temp_277 * temp_251;
    // 0x000690: 0x59A0050000171F0A Ffma
    temp_333 = fma(temp_320, temp_271, temp_327);
    // 0x000698: 0x5C68100001272020 Fmul
    temp_334 = temp_266 * temp_251;
    // 0x0006A8: 0x59A00A8001771408 Ffma
    temp_335 = fma(temp_329, temp_290, temp_284);
    // 0x0006B0: 0x59A0060000172323 Ffma
    temp_336 = fma(temp_325, temp_271, temp_330);
    // 0x0006B8: 0x59A01D8002972828 Ffma
    temp_337 = fma(temp_246, temp_257, temp_326);
    // 0x0006C8: 0x5C68100001270F0F Fmul
    temp_338 = temp_295 * temp_251;
    // 0x0006D0: 0x59A0028000770A05 Ffma
    temp_339 = fma(temp_333, temp_304, temp_314);
    // 0x0006D8: 0x59A00D800297001B Ffma
    temp_340 = fma(temp_250, temp_257, temp_331);
    // 0x0006E8: 0xEFD87F800AC7FF00 Ald
    temp_341 = in_attr2.w;
    // 0x0006F0: 0x4C5810180BA7080A Fadd
    temp_342 = temp_335 + vp_c6.data[46].z;
    // 0x0006F8: 0xEFF07F800D47FF05 Ast
    out_attr5.y = temp_339;
    // 0x000708: 0x59A00E0002971A1C Ffma
    temp_343 = fma(temp_292, temp_257, temp_332);
    // 0x000710: 0xEFF07F800D87FF08 Ast
    out_attr5.z = temp_335;
    // 0x000718: 0x59A0020000672304 Ffma
    temp_344 = fma(temp_336, temp_300, temp_310);
    // 0x000728: 0xEFF07F800E07FF25 Ast
    out_attr6.x = temp_118;
    // 0x000730: 0x59A0100002972B20 Ffma
    temp_345 = fma(temp_263, temp_257, temp_334);
    // 0x000738: 0xEFF07F800D07FF04 Ast
    out_attr5.x = temp_344;
    // 0x000748: 0x59A0140000173F3F Ffma
    temp_346 = fma(temp_270, temp_271, temp_337);
    // 0x000750: 0xEFF07F800E47FF24 Ast
    out_attr6.y = temp_129;
    // 0x000758: 0x4C5810180B970509 Fadd
    temp_347 = temp_339 + vp_c6.data[46].y;
    // 0x000768: 0x4C6810180C270A06 Fmul
    temp_348 = temp_342 * vp_c6.data[48].z;
    // 0x000770: 0x59A0078002972E0F Ffma
    temp_349 = fma(temp_264, temp_257, temp_338);
    // 0x000778: 0x59A00D8000171111 Ffma
    temp_350 = fma(temp_293, temp_271, temp_340);
    // 0x000788: 0x4C6810180C670A0B Fmul
    temp_351 = temp_342 * vp_c6.data[49].z;
    // 0x000790: 0x59A00E000017021C Ffma
    temp_352 = fma(temp_260, temp_271, temp_343);
    // 0x000798: 0x59A0100000170303 Ffma
    temp_353 = fma(temp_247, temp_271, temp_345);
    // 0x0007A8: 0x49A003180C17090C Ffma
    temp_354 = fma(temp_347, vp_c6.data[48].y, temp_348);
    // 0x0007B0: 0x4C6810180CA70A0A Fmul
    temp_355 = temp_342 * vp_c6.data[50].z;
    // 0x0007B8: 0x5C68100003F73F02 Fmul
    temp_356 = temp_346 * temp_346;
    // 0x0007C8: 0x59A0078000172C0F Ffma
    temp_357 = fma(temp_252, temp_271, temp_349);
    // 0x0007D0: 0x5C68100001171106 Fmul
    temp_358 = temp_350 * temp_350;
    // 0x0007D8: 0x4C5810180B870407 Fadd
    temp_359 = temp_344 + vp_c6.data[46].x;
    // 0x0007E8: 0x59A0178000170E0E Ffma
    temp_360 = fma(temp_261, temp_271, temp_328);
    // 0x0007F0: 0x49A005980C57090D Ffma
    temp_361 = fma(temp_347, vp_c6.data[49].y, temp_351);
    // 0x0007F8: 0x49A005180C97090A Ffma
    temp_362 = fma(temp_347, vp_c6.data[50].y, temp_355);
    // 0x000808: 0x59A0010000370301 Ffma
    temp_363 = fma(temp_353, temp_353, temp_356);
    // 0x000810: 0x4C58300C03770809 Fadd
    temp_364 = 0.0 - vp_c3.data[13].w;
    temp_365 = temp_335 + temp_364;
    // 0x000818: 0x59A0030000F70F06 Ffma
    temp_366 = fma(temp_357, temp_357, temp_358);
    // 0x000828: 0xEFF07F800B87FF09 Ast
    out_attr3.z = temp_365;
    // 0x000830: 0x49A006180C07070C Ffma
    temp_367 = fma(temp_359, vp_c6.data[48].x, temp_354);
    // 0x000838: 0x49A005180C87070B Ffma
    temp_368 = fma(temp_359, vp_c6.data[50].x, temp_362);
    // 0x000848: 0x4C68100C00470402 Fmul
    temp_369 = temp_344 * vp_c3.data[1].x;
    // 0x000850: 0x49A006980C47070D Ffma
    temp_370 = fma(temp_359, vp_c6.data[49].x, temp_361);
    // 0x000858: 0x4C68100C00070407 Fmul
    temp_371 = temp_344 * vp_c3.data[0].x;
    // 0x000868: 0x59A0030001C71C0A Ffma
    temp_372 = fma(temp_352, temp_352, temp_366);
    // 0x000870: 0x4C6810180BB70C12 Fmul
    temp_373 = temp_367 * vp_c6.data[46].w;
    // 0x000878: 0x5080000000570A0A Mufu
    temp_374 = inversesqrt(temp_372);
    // 0x000888: 0x59A0008000E70E09 Ffma
    temp_375 = fma(temp_360, temp_360, temp_363);
    // 0x000890: 0xEFF07F801107FF12 Ast
    out_attr9.x = temp_373;
    // 0x000898: 0x4C68100C00870406 Fmul
    temp_376 = temp_344 * vp_c3.data[2].x;
    // 0x0008A8: 0x5080000000570909 Mufu
    temp_377 = inversesqrt(temp_375);
    // 0x0008B0: 0x4C5830180B07040C Fadd
    temp_378 = 0.0 - vp_c6.data[44].x;
    temp_379 = temp_344 + temp_378;
    // 0x0008B8: 0x4C58300C02F70410 Fadd
    temp_380 = 0.0 - vp_c3.data[11].w;
    temp_381 = temp_344 + temp_380;
    // 0x0008C8: 0x49A0010C00570502 Ffma
    temp_382 = fma(temp_339, vp_c3.data[1].y, temp_369);
    // 0x0008D0: 0xEFF07F800B07FF10 Ast
    out_attr3.x = temp_381;
    // 0x0008D8: 0x4C58101002070801 Fadd
    temp_383 = temp_335 + vp_c4.data[8].x;
    // 0x0008E8: 0x4C6810180BB70D0D Fmul
    temp_384 = temp_370 * vp_c6.data[46].w;
    // 0x0008F0: 0x49A0030C00970506 Ffma
    temp_385 = fma(temp_339, vp_c3.data[2].y, temp_376);
    // 0x0008F8: 0xEFF07F801147FF0D Ast
    out_attr9.y = temp_384;
    // 0x000908: 0x4C68101803870C12 Fmul
    temp_386 = temp_379 * vp_c6.data[14].x;
    // 0x000910: 0x4C5830180B170510 Fadd
    temp_387 = 0.0 - vp_c6.data[44].y;
    temp_388 = temp_339 + temp_387;
    // 0x000918: 0x49A0038C00170507 Ffma
    temp_389 = fma(temp_339, vp_c3.data[0].y, temp_371);
    // 0x000928: 0x4C58300C03370513 Fadd
    temp_390 = 0.0 - vp_c3.data[12].w;
    temp_391 = temp_339 + temp_390;
    // 0x000930: 0x4C6810180BB70B0C Fmul
    temp_392 = temp_368 * vp_c6.data[46].w;
    // 0x000938: 0xEFF07F800B47FF13 Ast
    out_attr3.y = temp_391;
    // 0x000948: 0x49A0010C00670104 Ffma
    temp_393 = fma(temp_383, vp_c3.data[1].z, temp_382);
    // 0x000950: 0xEFF07F801187FF0C Ast
    out_attr9.z = temp_392;
    // 0x000958: 0x49A0010C0067080D Ffma
    temp_394 = fma(temp_335, vp_c3.data[1].z, temp_382);
    // 0x000968: 0x5C68100000970305 Fmul
    temp_395 = temp_353 * temp_377;
    // 0x000970: 0x5C68100000970E0E Fmul
    temp_396 = temp_360 * temp_377;
    // 0x000978: 0xEFF07F800947FF05 Ast
    out_attr1.y = temp_395;
    // 0x000988: 0x5C68100000A7110B Fmul
    temp_397 = temp_350 * temp_374;
    // 0x000990: 0xEFF07F800987FF0E Ast
    out_attr1.z = temp_396;
    // 0x000998: 0x5C68100000A70F0F Fmul
    temp_398 = temp_357 * temp_374;
    // 0x0009A8: 0xEFF07F800807FF0B Ast
    out_attr0.x = temp_397;
    // 0x0009B0: 0x49A0030C00A70102 Ffma
    temp_399 = fma(temp_383, vp_c3.data[2].z, temp_385);
    // 0x0009B8: 0xEFF07F800847FF0F Ast
    out_attr0.y = temp_398;
    // 0x0009C8: 0x5C68100000973F09 Fmul
    temp_400 = temp_346 * temp_377;
    // 0x0009D0: 0x49A0091803971012 Ffma
    temp_401 = fma(temp_388, vp_c6.data[14].y, temp_386);
    // 0x0009D8: 0xEFF07F800907FF09 Ast
    out_attr1.x = temp_400;
    // 0x0009E8: 0x5C68100000A71C0A Fmul
    temp_402 = temp_352 * temp_374;
    // 0x0009F0: 0x4C5830180B270811 Fadd
    temp_403 = 0.0 - vp_c6.data[44].z;
    temp_404 = temp_335 + temp_403;
    // 0x0009F8: 0xEFF07F800887FF0A Ast
    out_attr0.z = temp_402;
    // 0x000A08: 0x49A0038C00270101 Ffma
    temp_405 = fma(temp_383, vp_c3.data[0].z, temp_389);
    // 0x000A10: 0x49A0038C00270807 Ffma
    temp_406 = fma(temp_335, vp_c3.data[0].z, temp_389);
    // 0x000A18: 0x49A0030C00A70810 Ffma
    temp_407 = fma(temp_335, vp_c3.data[2].z, temp_385);
    // 0x000A28: 0x5C68100000B70E03 Fmul
    temp_408 = temp_396 * temp_397;
    // 0x000A30: 0x5C68100000F70906 Fmul
    temp_409 = temp_400 * temp_398;
    // 0x000A38: 0x5C68100000A7050C Fmul
    temp_410 = temp_395 * temp_402;
    // 0x000A48: 0x49A0091803A71112 Ffma
    temp_411 = fma(temp_404, vp_c6.data[14].z, temp_401);
    // 0x000A50: 0x4C58100C00370101 Fadd
    temp_412 = temp_405 + vp_c3.data[0].w;
    // 0x000A58: 0x4C58100C00370711 Fadd
    temp_413 = temp_406 + vp_c3.data[0].w;
    // 0x000A68: 0x4C58100C00770D08 Fadd
    temp_414 = temp_394 + vp_c3.data[1].w;
    // 0x000A70: 0x59A2018000A7090D Ffma
    temp_415 = 0.0 - temp_408;
    temp_416 = fma(temp_400, temp_402, temp_415);
    // 0x000A78: 0x59A2030000B7050B Ffma
    temp_417 = 0.0 - temp_409;
    temp_418 = fma(temp_395, temp_397, temp_417);
    // 0x000A88: 0x59A2060000F70E07 Ffma
    temp_419 = 0.0 - temp_410;
    temp_420 = fma(temp_396, temp_398, temp_419);
    // 0x000A90: 0x4C68100C02870103 Fmul
    temp_421 = temp_412 * vp_c3.data[10].x;
    // 0x000A98: 0x4C68100C02470105 Fmul
    temp_422 = temp_412 * vp_c3.data[9].x;
    // 0x000AA8: 0x4C68100C02070106 Fmul
    temp_423 = temp_412 * vp_c3.data[8].x;
    // 0x000AB0: 0x4C68101802C71111 Fmul
    temp_424 = temp_413 * vp_c6.data[11].x;
    // 0x000AB8: 0x4C58100C00770404 Fadd
    temp_425 = temp_393 + vp_c3.data[1].w;
    // 0x000AC8: 0x4C68100C01C70101 Fmul
    temp_426 = temp_412 * vp_c3.data[7].x;
    // 0x000AD0: 0x5C68100000070707 Fmul
    temp_427 = temp_420 * temp_341;
    // 0x000AD8: 0x5C68100000070D0D Fmul
    temp_428 = temp_416 * temp_341;
    // 0x000AE8: 0xEFF07F800A07FF07 Ast
    out_attr2.x = temp_427;
    // 0x000AF0: 0x5C68100000070B0B Fmul
    temp_429 = temp_418 * temp_341;
    // 0x000AF8: 0xEFF07F800A47FF0D Ast
    out_attr2.y = temp_428;
    // 0x000B08: 0x4C58100C00B71010 Fadd
    temp_430 = temp_407 + vp_c3.data[2].w;
    // 0x000B10: 0xEFF07F800A87FF0B Ast
    out_attr2.z = temp_429;
    // 0x000B18: 0x49A0089802D70811 Ffma
    temp_431 = fma(temp_414, vp_c6.data[11].y, temp_424);
    // 0x000B28: 0xEFF07F800C87FF10 Ast
    out_attr4.z = temp_430;
    // 0x000B30: 0x4C58100C00B70202 Fadd
    temp_432 = temp_399 + vp_c3.data[2].w;
    // 0x000B38: 0x49A0018C02970403 Ffma
    temp_433 = fma(temp_425, vp_c3.data[10].y, temp_421);
    // 0x000B48: 0x49A0028C02570405 Ffma
    temp_434 = fma(temp_425, vp_c3.data[9].y, temp_422);
    // 0x000B50: 0x49A0030C02170400 Ffma
    temp_435 = fma(temp_425, vp_c3.data[8].y, temp_423);
    // 0x000B58: 0x49A0008C01D70401 Ffma
    temp_436 = fma(temp_425, vp_c3.data[7].y, temp_426);
    // 0x000B68: 0x4C98079803C70013 Mov
    // 0x000B70: 0x49A0089802E71011 Ffma
    temp_437 = fma(temp_430, vp_c6.data[11].z, temp_431);
    // 0x000B78: 0x4C98079803070008 Mov
    // 0x000B88: 0x49A0018C02A70203 Ffma
    temp_438 = fma(temp_432, vp_c3.data[10].z, temp_433);
    // 0x000B90: 0x49A0028C02670205 Ffma
    temp_439 = fma(temp_432, vp_c3.data[9].z, temp_434);
    // 0x000B98: 0x49A0000C02270200 Ffma
    temp_440 = fma(temp_432, vp_c3.data[8].z, temp_435);
    // 0x000BA8: 0x49A0008C01E70201 Ffma
    temp_441 = fma(temp_432, vp_c3.data[7].z, temp_436);
    // 0x000BB0: 0x51A0099803B71212 Ffma
    temp_442 = fma(temp_411, vp_c6.data[15].x, vp_c6.data[14].w);
    // 0x000BB8: 0x51A0041802F71111 Ffma
    temp_443 = fma(temp_437, vp_c6.data[12].x, vp_c6.data[11].w);
    // 0x000BC8: 0xEFF07F801047FF12 Ast
    out_attr8.y = temp_442;
    // 0x000BD0: 0x4C58100C02B70303 Fadd
    temp_444 = temp_438 + vp_c3.data[10].w;
    // 0x000BD8: 0xEFF07F801007FF11 Ast
    out_attr8.x = temp_443;
    // 0x000BE8: 0x4C58100C02770505 Fadd
    temp_445 = temp_439 + vp_c3.data[9].w;
    // 0x000BF0: 0xEFF07F8007C7FF03 Ast
    gl_Position.w = temp_444;
    // 0x000BF8: 0x4C58100C02370000 Fadd
    temp_446 = temp_440 + vp_c3.data[8].w;
    // 0x000C08: 0xEFF07F800787FF05 Ast
    gl_Position.z = temp_445;
    // 0x000C10: 0x4C58100C01F70101 Fadd
    temp_447 = temp_441 + vp_c3.data[7].w;
    // 0x000C18: 0xEFF07F800747FF00 Ast
    gl_Position.y = temp_446;
    // 0x000C28: 0xEFF07F800707FF01 Ast
    gl_Position.x = temp_447;
    // 0x000C30: 0xE30000000007000F Exit
    return;
}
