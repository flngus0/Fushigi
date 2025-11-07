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
    uint temp_17;
    int temp_18;
    int temp_19;
    int temp_20;
    uint temp_21;
    uint temp_22;
    int temp_23;
    precise float temp_24;
    int temp_25;
    uint temp_26;
    int temp_27;
    precise float temp_28;
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
    precise float temp_39;
    int temp_40;
    uint temp_41;
    uint temp_42;
    int temp_43;
    precise float temp_44;
    int temp_45;
    uint temp_46;
    int temp_47;
    precise float temp_48;
    uint temp_49;
    uint temp_50;
    int temp_51;
    precise float temp_52;
    int temp_53;
    uint temp_54;
    int temp_55;
    precise float temp_56;
    int temp_57;
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
    precise float temp_79;
    int temp_80;
    uint temp_81;
    uint temp_82;
    int temp_83;
    precise float temp_84;
    int temp_85;
    uint temp_86;
    int temp_87;
    precise float temp_88;
    precise float temp_89;
    precise float temp_90;
    precise float temp_91;
    precise float temp_92;
    precise float temp_93;
    precise float temp_94;
    int temp_95;
    uint temp_96;
    uint temp_97;
    int temp_98;
    precise float temp_99;
    int temp_100;
    uint temp_101;
    int temp_102;
    precise float temp_103;
    precise float temp_104;
    precise float temp_105;
    int temp_106;
    uint temp_107;
    uint temp_108;
    int temp_109;
    precise float temp_110;
    int temp_111;
    uint temp_112;
    int temp_113;
    precise float temp_114;
    int temp_115;
    uint temp_116;
    uint temp_117;
    int temp_118;
    precise float temp_119;
    int temp_120;
    uint temp_121;
    int temp_122;
    precise float temp_123;
    precise float temp_124;
    precise float temp_125;
    int temp_126;
    uint temp_127;
    uint temp_128;
    int temp_129;
    precise float temp_130;
    int temp_131;
    uint temp_132;
    int temp_133;
    precise float temp_134;
    precise float temp_135;
    int temp_136;
    uint temp_137;
    uint temp_138;
    int temp_139;
    precise float temp_140;
    int temp_141;
    uint temp_142;
    int temp_143;
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
    precise float temp_163;
    precise float temp_164;
    precise float temp_165;
    precise float temp_166;
    precise float temp_167;
    precise float temp_168;
    precise float temp_169;
    int temp_170;
    precise float temp_171;
    precise float temp_172;
    precise float temp_173;
    precise float temp_174;
    precise float temp_175;
    precise float temp_176;
    precise float temp_177;
    precise float temp_178;
    precise float temp_179;
    precise float temp_180;
    precise float temp_181;
    precise float temp_182;
    precise float temp_183;
    precise float temp_184;
    precise float temp_185;
    precise float temp_186;
    precise float temp_187;
    precise float temp_188;
    precise float temp_189;
    precise float temp_190;
    precise float temp_191;
    int temp_192;
    precise float temp_193;
    precise float temp_194;
    precise float temp_195;
    precise float temp_196;
    precise float temp_197;
    precise float temp_198;
    precise float temp_199;
    precise float temp_200;
    precise float temp_201;
    precise float temp_202;
    int temp_203;
    uint temp_204;
    uint temp_205;
    int temp_206;
    precise float temp_207;
    int temp_208;
    uint temp_209;
    int temp_210;
    precise float temp_211;
    precise float temp_212;
    int temp_213;
    uint temp_214;
    uint temp_215;
    int temp_216;
    precise float temp_217;
    int temp_218;
    uint temp_219;
    int temp_220;
    precise float temp_221;
    precise float temp_222;
    int temp_223;
    uint temp_224;
    uint temp_225;
    int temp_226;
    precise float temp_227;
    precise float temp_228;
    int temp_229;
    uint temp_230;
    uint temp_231;
    int temp_232;
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
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    // 0x000008: 0x4C9807940027001B Mov
    // 0x000010: 0xEFD87F800E07FF02 Ald
    temp_0 = in_attr6.x;
    // 0x000018: 0xEFD87F800E47FF01 Ald
    temp_1 = in_attr6.y;
    // 0x000028: 0xEFD87F800987FF0B Ald
    temp_2 = in_attr1.z;
    // 0x000030: 0xEFD87F800A47FF1C Ald
    temp_3 = in_attr2.y;
    // 0x000038: 0xEFD87F800907FF16 Ald
    temp_4 = in_attr1.x;
    // 0x000048: 0xEFD87F800A87FF23 Ald
    temp_5 = in_attr2.z;
    // 0x000050: 0x36007F8003070228 Xmad
    temp_6 = floatBitsToInt(temp_0) & 0xFFFF;
    temp_7 = temp_6 * 48;
    // 0x000058: 0xEFD87F801047FF1A Ald
    temp_8 = in_attr8.y;
    // 0x000068: 0x36007F800307012C Xmad
    temp_9 = floatBitsToInt(temp_1) & 0xFFFF;
    temp_10 = temp_9 * 48;
    // 0x000070: 0xEFD87F800A07FF1D Ald
    temp_11 = in_attr2.x;
    // 0x000078: 0x3620141003070228 Xmad
    temp_12 = floatBitsToUint(temp_0) >> 16;
    temp_13 = int(temp_12) * 48;
    temp_14 = temp_13 << 16;
    temp_15 = temp_14 + temp_7;
    // 0x000088: 0xEFD87F800947FF12 Ald
    temp_16 = in_attr1.y;
    // 0x000090: 0x362016100307012C Xmad
    temp_17 = floatBitsToUint(temp_1) >> 16;
    temp_18 = int(temp_17) * 48;
    temp_19 = temp_18 << 16;
    temp_20 = temp_19 + temp_10;
    // 0x000098: 0xEF9500800007280E Ldc
    temp_21 = uint(temp_15) >> 2;
    temp_22 = temp_21 >> 2;
    temp_23 = int(temp_21) & 3;
    temp_24 = vp_c8.data[int(temp_22)][temp_23];
    temp_25 = int(temp_21) + 1;
    temp_26 = uint(temp_25) >> 2;
    temp_27 = temp_25 & 3;
    temp_28 = vp_c8.data[int(temp_26)][temp_27];
    // 0x0000A8: 0x5C68100001C70B00 Fmul
    temp_29 = temp_2 * temp_3;
    // 0x0000B0: 0xEF95008001072808 Ldc
    temp_30 = temp_15 + 16;
    temp_31 = uint(temp_30) >> 2;
    temp_32 = temp_31 >> 2;
    temp_33 = int(temp_31) & 3;
    temp_34 = vp_c8.data[int(temp_32)][temp_33];
    temp_35 = int(temp_31) + 1;
    temp_36 = uint(temp_35) >> 2;
    temp_37 = temp_35 & 3;
    temp_38 = vp_c8.data[int(temp_36)][temp_37];
    // 0x0000B8: 0x5C6810000237160A Fmul
    temp_39 = temp_4 * temp_5;
    // 0x0000C8: 0xEF95008002072C02 Ldc
    temp_40 = temp_20 + 32;
    temp_41 = uint(temp_40) >> 2;
    temp_42 = temp_41 >> 2;
    temp_43 = int(temp_41) & 3;
    temp_44 = vp_c8.data[int(temp_42)][temp_43];
    temp_45 = int(temp_41) + 1;
    temp_46 = uint(temp_45) >> 2;
    temp_47 = temp_45 & 3;
    temp_48 = vp_c8.data[int(temp_46)][temp_47];
    // 0x0000D0: 0xEF95008000072C06 Ldc
    temp_49 = uint(temp_20) >> 2;
    temp_50 = temp_49 >> 2;
    temp_51 = int(temp_49) & 3;
    temp_52 = vp_c8.data[int(temp_50)][temp_51];
    temp_53 = int(temp_49) + 1;
    temp_54 = uint(temp_53) >> 2;
    temp_55 = temp_53 & 3;
    temp_56 = vp_c8.data[int(temp_54)][temp_55];
    // 0x0000D8: 0xEF95008001072C04 Ldc
    temp_57 = temp_20 + 16;
    temp_58 = uint(temp_57) >> 2;
    temp_59 = temp_58 >> 2;
    temp_60 = int(temp_58) & 3;
    temp_61 = vp_c8.data[int(temp_59)][temp_60];
    temp_62 = int(temp_58) + 1;
    temp_63 = uint(temp_62) >> 2;
    temp_64 = temp_62 & 3;
    temp_65 = vp_c8.data[int(temp_63)][temp_64];
    // 0x0000E8: 0xEF9500800207280C Ldc
    temp_66 = temp_15 + 32;
    temp_67 = uint(temp_66) >> 2;
    temp_68 = temp_67 >> 2;
    temp_69 = int(temp_67) & 3;
    temp_70 = vp_c8.data[int(temp_68)][temp_69];
    temp_71 = int(temp_67) + 1;
    temp_72 = uint(temp_71) >> 2;
    temp_73 = temp_71 & 3;
    temp_74 = vp_c8.data[int(temp_72)][temp_73];
    // 0x0000F0: 0xEFD87F801007FF10 Ald
    temp_75 = in_attr8.x;
    // 0x0000F8: 0x4C98079400370001 Mov
    // 0x000108: 0xEFD87F800AC7FF18 Ald
    temp_76 = in_attr2.w;
    // 0x000110: 0x51A00D9400471A1B Ffma
    temp_77 = fma(temp_8, vp_c5.data[0].z, vp_c5.data[1].x);
    // 0x000118: 0xEFD87F800807FF19 Ald
    temp_78 = in_attr0.x;
    // 0x000128: 0x5C68100001D71221 Fmul
    temp_79 = temp_16 * temp_11;
    // 0x000130: 0xEF95008001872814 Ldc
    temp_80 = temp_15 + 24;
    temp_81 = uint(temp_80) >> 2;
    temp_82 = temp_81 >> 2;
    temp_83 = int(temp_81) & 3;
    temp_84 = vp_c8.data[int(temp_82)][temp_83];
    temp_85 = int(temp_81) + 1;
    temp_86 = uint(temp_85) >> 2;
    temp_87 = temp_85 & 3;
    temp_88 = vp_c8.data[int(temp_86)][temp_87];
    // 0x000138: 0x59A200000127231F Ffma
    temp_89 = 0.0 - temp_29;
    temp_90 = fma(temp_5, temp_16, temp_89);
    // 0x000148: 0xEFD87F800847FF24 Ald
    temp_91 = in_attr0.y;
    // 0x000150: 0x51A0009400571A1A Ffma
    temp_92 = fma(temp_8, vp_c5.data[0].w, vp_c5.data[1].y);
    // 0x000158: 0x59A2050001D70B12 Ffma
    temp_93 = 0.0 - temp_39;
    temp_94 = fma(temp_2, temp_11, temp_93);
    // 0x000168: 0xEF95008000872C00 Ldc
    temp_95 = temp_20 + 8;
    temp_96 = uint(temp_95) >> 2;
    temp_97 = temp_96 >> 2;
    temp_98 = int(temp_96) & 3;
    temp_99 = vp_c8.data[int(temp_97)][temp_98];
    temp_100 = int(temp_96) + 1;
    temp_101 = uint(temp_100) >> 2;
    temp_102 = temp_100 & 3;
    temp_103 = vp_c8.data[int(temp_101)][temp_102];
    // 0x000170: 0x59A2108001671C21 Ffma
    temp_104 = 0.0 - temp_79;
    temp_105 = fma(temp_3, temp_4, temp_104);
    // 0x000178: 0xEF9500800087280A Ldc
    temp_106 = temp_15 + 8;
    temp_107 = uint(temp_106) >> 2;
    temp_108 = temp_107 >> 2;
    temp_109 = int(temp_107) & 3;
    temp_110 = vp_c8.data[int(temp_108)][temp_109];
    temp_111 = int(temp_107) + 1;
    temp_112 = uint(temp_111) >> 2;
    temp_113 = temp_111 & 3;
    temp_114 = vp_c8.data[int(temp_112)][temp_113];
    // 0x000188: 0xEF95008002872816 Ldc
    temp_115 = temp_15 + 40;
    temp_116 = uint(temp_115) >> 2;
    temp_117 = temp_116 >> 2;
    temp_118 = int(temp_116) & 3;
    temp_119 = vp_c8.data[int(temp_117)][temp_118];
    temp_120 = int(temp_116) + 1;
    temp_121 = uint(temp_120) >> 2;
    temp_122 = temp_120 & 3;
    temp_123 = vp_c8.data[int(temp_121)][temp_122];
    // 0x000190: 0x49A00D940007101B Ffma
    temp_124 = fma(temp_75, vp_c5.data[0].x, temp_77);
    // 0x000198: 0x49A00D140017101A Ffma
    temp_125 = fma(temp_75, vp_c5.data[0].y, temp_92);
    // 0x0001A8: 0xEF95008002872C10 Ldc
    temp_126 = temp_20 + 40;
    temp_127 = uint(temp_126) >> 2;
    temp_128 = temp_127 >> 2;
    temp_129 = int(temp_127) & 3;
    temp_130 = vp_c8.data[int(temp_128)][temp_129];
    temp_131 = int(temp_127) + 1;
    temp_132 = uint(temp_131) >> 2;
    temp_133 = temp_131 & 3;
    temp_134 = vp_c8.data[int(temp_132)][temp_133];
    // 0x0001B0: 0x5C68100001871220 Fmul
    temp_135 = temp_94 * temp_76;
    // 0x0001B8: 0xEF95008001872C12 Ldc
    temp_136 = temp_20 + 24;
    temp_137 = uint(temp_136) >> 2;
    temp_138 = temp_137 >> 2;
    temp_139 = int(temp_137) & 3;
    temp_140 = vp_c8.data[int(temp_138)][temp_139];
    temp_141 = int(temp_137) + 1;
    temp_142 = uint(temp_141) >> 2;
    temp_143 = temp_141 & 3;
    temp_144 = vp_c8.data[int(temp_142)][temp_143];
    // 0x0001C8: 0x5C68100001871F1F Fmul
    temp_145 = temp_90 * temp_76;
    // 0x0001D0: 0x5C68100001872121 Fmul
    temp_146 = temp_105 * temp_76;
    // 0x0001D8: 0x5C68100001D70E26 Fmul
    temp_147 = temp_24 * temp_11;
    // 0x0001E8: 0x5C68100001F70E25 Fmul
    temp_148 = temp_24 * temp_145;
    // 0x0001F0: 0x5C68100001970E2A Fmul
    temp_149 = temp_24 * temp_78;
    // 0x0001F8: 0x5C68100001D7082B Fmul
    temp_150 = temp_34 * temp_11;
    // 0x000208: 0x5C68100000871F2F Fmul
    temp_151 = temp_145 * temp_34;
    // 0x000210: 0x5C68100001970808 Fmul
    temp_152 = temp_34 * temp_78;
    // 0x000218: 0x59A0128002070F25 Ffma
    temp_153 = fma(temp_28, temp_135, temp_148);
    // 0x000228: 0x5C68100001F70229 Fmul
    temp_154 = temp_44 * temp_145;
    // 0x000230: 0x5C68100001D7020E Fmul
    temp_155 = temp_44 * temp_11;
    // 0x000238: 0x5C6810000197022D Fmul
    temp_156 = temp_44 * temp_78;
    // 0x000248: 0x5C68100001F70622 Fmul
    temp_157 = temp_52 * temp_145;
    // 0x000250: 0x5C68100001D7061E Fmul
    temp_158 = temp_52 * temp_11;
    // 0x000258: 0x5C68100001F70402 Fmul
    temp_159 = temp_61 * temp_145;
    // 0x000268: 0x5C68100001D70427 Fmul
    temp_160 = temp_61 * temp_11;
    // 0x000270: 0x5C68100001D70C1D Fmul
    temp_161 = temp_70 * temp_11;
    // 0x000278: 0x5C68100000C71F1F Fmul
    temp_162 = temp_145 * temp_70;
    // 0x000288: 0x5C68100001970606 Fmul
    temp_163 = temp_52 * temp_78;
    // 0x000290: 0x5C6810000197042E Fmul
    temp_164 = temp_61 * temp_78;
    // 0x000298: 0x5C68100001970C0C Fmul
    temp_165 = temp_70 * temp_78;
    // 0x0002A8: 0xEFD87F800887FF19 Ald
    temp_166 = in_attr0.z;
    // 0x0002B0: 0x59A0130001C70F04 Ffma
    temp_167 = fma(temp_28, temp_3, temp_147);
    // 0x0002B8: 0x59A0040002470926 Ffma
    temp_168 = fma(temp_38, temp_91, temp_152);
    // 0x0002C8: 0x4CB0119002371A08 F2i
    temp_169 = trunc(vp_c4.data[8].w);
    temp_170 = int(temp_169);
    // 0x0002D0: 0x59A0110002070722 Ffma
    temp_171 = fma(temp_56, temp_135, temp_157);
    // 0x0002D8: 0x59A00F0001C7071E Ffma
    temp_172 = fma(temp_56, temp_3, temp_158);
    // 0x0002E8: 0x59A0030002470706 Ffma
    temp_173 = fma(temp_56, temp_91, temp_163);
    // 0x0002F0: 0x59A0138001C70528 Ffma
    temp_174 = fma(temp_65, temp_3, temp_160);
    // 0x0002F8: 0x59A0010002070507 Ffma
    temp_175 = fma(temp_65, temp_135, temp_159);
    // 0x000308: 0x59A0170002470527 Ffma
    temp_176 = fma(temp_65, temp_91, temp_164);
    // 0x000310: 0xEFD87F800C47FF05 Ald
    temp_177 = in_attr4.y;
    // 0x000318: 0x59A0150002470F0F Ffma
    temp_178 = fma(temp_28, temp_91, temp_149);
    // 0x000328: 0x59A0148002070329 Ffma
    temp_179 = fma(temp_48, temp_135, temp_154);
    // 0x000330: 0x59A0070001C7030E Ffma
    temp_180 = fma(temp_48, temp_3, temp_155);
    // 0x000338: 0x59A0168002470303 Ffma
    temp_181 = fma(temp_48, temp_91, temp_156);
    // 0x000348: 0x59A0158001C70902 Ffma
    temp_182 = fma(temp_38, temp_3, temp_150);
    // 0x000350: 0x59A017800097202F Ffma
    temp_183 = fma(temp_135, temp_38, temp_151);
    // 0x000358: 0xEFD87F800C07FF09 Ald
    temp_184 = in_attr4.x;
    // 0x000368: 0x59A0060002470D0C Ffma
    temp_185 = fma(temp_74, temp_91, temp_165);
    // 0x000370: 0xEFF07F800E07FF1B Ast
    out_attr6.x = temp_124;
    // 0x000378: 0x59A0110002170022 Ffma
    temp_186 = fma(temp_99, temp_146, temp_171);
    // 0x000388: 0xEFF07F800E47FF1A Ast
    out_attr6.y = temp_125;
    // 0x000390: 0x59A00F000237001E Ffma
    temp_187 = fma(temp_99, temp_5, temp_172);
    // 0x000398: 0x59A0030001970006 Ffma
    temp_188 = fma(temp_99, temp_166, temp_173);
    // 0x0003A8: 0x59A0020002370A04 Ffma
    temp_189 = fma(temp_110, temp_5, temp_167);
    // 0x0003B0: 0x59A0128002170A00 Ffma
    temp_190 = fma(temp_110, temp_146, temp_153);
    // 0x0003B8: 0x59A0078001970A0A Ffma
    temp_191 = fma(temp_110, temp_166, temp_178);
    // 0x0003C8: 0x3848000000470808 Shl
    temp_192 = temp_170 << 4;
    // 0x0003D0: 0x59A00F8000D7201F Ffma
    temp_193 = fma(temp_135, temp_74, temp_162);
    // 0x0003D8: 0x59A014800217100F Ffma
    temp_194 = fma(temp_130, temp_146, temp_179);
    // 0x0003E8: 0x59A007000237100E Ffma
    temp_195 = fma(temp_130, temp_5, temp_180);
    // 0x0003F0: 0x59A0018001971010 Ffma
    temp_196 = fma(temp_130, temp_166, temp_181);
    // 0x0003F8: 0x59A0038002171207 Ffma
    temp_197 = fma(temp_140, temp_146, temp_175);
    // 0x000408: 0x59A0140002371228 Ffma
    temp_198 = fma(temp_140, temp_5, temp_174);
    // 0x000410: 0x59A0138001971220 Ffma
    temp_199 = fma(temp_140, temp_166, temp_176);
    // 0x000418: 0x59A0130001971426 Ffma
    temp_200 = fma(temp_84, temp_166, temp_168);
    // 0x000428: 0x59A00E8001C70D1D Ffma
    temp_201 = fma(temp_74, temp_3, temp_161);
    // 0x000430: 0x59A0010002371412 Ffma
    temp_202 = fma(temp_84, temp_5, temp_182);
    // 0x000438: 0xEF95007048070802 Ldc
    temp_203 = temp_192 + 0x480;
    temp_204 = uint(temp_203) >> 2;
    temp_205 = temp_204 >> 2;
    temp_206 = int(temp_204) & 3;
    temp_207 = vp_c7.data[int(temp_205)][temp_206];
    temp_208 = int(temp_204) + 1;
    temp_209 = uint(temp_208) >> 2;
    temp_210 = temp_208 & 3;
    temp_211 = vp_c7.data[int(temp_209)][temp_210];
    // 0x000448: 0x59A0060001971619 Ffma
    temp_212 = fma(temp_119, temp_166, temp_185);
    // 0x000450: 0xEF9500706807080C Ldc
    temp_213 = temp_192 + 0x680;
    temp_214 = uint(temp_213) >> 2;
    temp_215 = temp_214 >> 2;
    temp_216 = int(temp_214) & 3;
    temp_217 = vp_c7.data[int(temp_215)][temp_216];
    temp_218 = int(temp_214) + 1;
    temp_219 = uint(temp_218) >> 2;
    temp_220 = temp_218 & 3;
    temp_221 = vp_c7.data[int(temp_219)][temp_220];
    // 0x000458: 0x5C5810000067011C Fadd
    temp_222 = temp_103 + temp_188;
    // 0x000468: 0xEF94007048870801 Ldc
    temp_223 = temp_192 + 0x488;
    temp_224 = uint(temp_223) >> 2;
    temp_225 = temp_224 >> 2;
    temp_226 = int(temp_224) & 3;
    temp_227 = vp_c7.data[int(temp_225)][temp_226];
    // 0x000470: 0x5C58100000A70B0A Fadd
    temp_228 = temp_114 + temp_191;
    // 0x000478: 0xEF94007068870806 Ldc
    temp_229 = temp_192 + 0x688;
    temp_230 = uint(temp_229) >> 2;
    temp_231 = temp_230 >> 2;
    temp_232 = int(temp_230) & 3;
    temp_233 = vp_c7.data[int(temp_231)][temp_232];
    // 0x000488: 0x5C58100002071313 Fadd
    temp_234 = temp_144 + temp_199;
    // 0x000490: 0x5C58100001071110 Fadd
    temp_235 = temp_134 + temp_196;
    // 0x000498: 0x5C58100002671526 Fadd
    temp_236 = temp_88 + temp_200;
    // 0x0004A8: 0x5C68100000571E1E Fmul
    temp_237 = temp_187 * temp_177;
    // 0x0004B0: 0x5C68100000571C1C Fmul
    temp_238 = temp_222 * temp_177;
    // 0x0004B8: 0x5C58100001971717 Fadd
    temp_239 = temp_123 + temp_212;
    // 0x0004C8: 0x5C68100000571313 Fmul
    temp_240 = temp_234 * temp_177;
    // 0x0004D0: 0x5C68100000571010 Fmul
    temp_241 = temp_235 * temp_177;
    // 0x0004D8: 0x5C68100000572828 Fmul
    temp_242 = temp_198 * temp_177;
    // 0x0004E8: 0x59A00F0000970404 Ffma
    temp_243 = fma(temp_189, temp_184, temp_237);
    // 0x0004F0: 0x59A00E0000970A11 Ffma
    temp_244 = fma(temp_228, temp_184, temp_238);
    // 0x0004F8: 0x59A00E8002371623 Ffma
    temp_245 = fma(temp_119, temp_5, temp_201);
    // 0x000508: 0x59A0098000972626 Ffma
    temp_246 = fma(temp_236, temp_184, temp_240);
    // 0x000510: 0x59A0080000971710 Ffma
    temp_247 = fma(temp_239, temp_184, temp_241);
    // 0x000518: 0x5C68100000570E0E Fmul
    temp_248 = temp_195 * temp_177;
    // 0x000528: 0x59A0140000971212 Ffma
    temp_249 = fma(temp_202, temp_184, temp_242);
    // 0x000530: 0x5C6810000047040B Fmul
    temp_250 = temp_243 * temp_243;
    // 0x000538: 0x59A0178001472114 Ffma
    temp_251 = fma(temp_146, temp_84, temp_183);
    // 0x000548: 0x5C68100000572222 Fmul
    temp_252 = temp_186 * temp_177;
    // 0x000550: 0x5C68100000570707 Fmul
    temp_253 = temp_197 * temp_177;
    // 0x000558: 0x5C68100000570F0F Fmul
    temp_254 = temp_194 * temp_177;
    // 0x000568: 0x59A0060000271102 Ffma
    temp_255 = fma(temp_244, temp_207, temp_217);
    // 0x000570: 0x59A0068000372603 Ffma
    temp_256 = fma(temp_246, temp_211, temp_221);
    // 0x000578: 0xEFF07F800D07FF02 Ast
    out_attr5.x = temp_255;
    // 0x000588: 0x59A0030000171006 Ffma
    temp_257 = fma(temp_247, temp_227, temp_233);
    // 0x000590: 0xEFF07F800D47FF03 Ast
    out_attr5.y = temp_256;
    // 0x000598: 0x4C5830180B070208 Fadd
    temp_258 = 0.0 - vp_c6.data[44].x;
    temp_259 = temp_255 + temp_258;
    // 0x0005A8: 0xEFF07F800D87FF06 Ast
    out_attr5.z = temp_257;
    // 0x0005B0: 0x4C5830180B170305 Fadd
    temp_260 = 0.0 - vp_c6.data[44].y;
    temp_261 = temp_256 + temp_260;
    // 0x0005B8: 0x59A0070000972323 Ffma
    temp_262 = fma(temp_245, temp_184, temp_248);
    // 0x0005C8: 0x59A005800127120A Ffma
    temp_263 = fma(temp_249, temp_249, temp_250);
    // 0x0005D0: 0x59A0038000971401 Ffma
    temp_264 = fma(temp_251, temp_184, temp_253);
    // 0x0005D8: 0x4C5810180BA70607 Fadd
    temp_265 = temp_257 + vp_c6.data[46].z;
    // 0x0005E8: 0x4C68101803870808 Fmul
    temp_266 = temp_259 * vp_c6.data[14].x;
    // 0x0005F0: 0x59A00F8001672116 Ffma
    temp_267 = fma(temp_146, temp_119, temp_193);
    // 0x0005F8: 0x59A0110000970000 Ffma
    temp_268 = fma(temp_190, temp_184, temp_252);
    // 0x000608: 0x59A005000237230A Ffma
    temp_269 = fma(temp_262, temp_262, temp_263);
    // 0x000610: 0x4C58300C02F70214 Fadd
    temp_270 = 0.0 - vp_c3.data[11].w;
    temp_271 = temp_255 + temp_270;
    // 0x000618: 0x5080000000570A11 Mufu
    temp_272 = inversesqrt(temp_269);
    // 0x000628: 0x49A0041803970513 Ffma
    temp_273 = fma(temp_261, vp_c6.data[14].y, temp_266);
    // 0x000630: 0xEFF07F800B07FF14 Ast
    out_attr3.x = temp_271;
    // 0x000638: 0x4C68100C00070205 Fmul
    temp_274 = temp_255 * vp_c3.data[0].x;
    // 0x000648: 0x4C5810180B970308 Fadd
    temp_275 = temp_256 + vp_c6.data[46].y;
    // 0x000650: 0x4C6810180C27070B Fmul
    temp_276 = temp_265 * vp_c6.data[48].z;
    // 0x000658: 0x4C6810180C67070D Fmul
    temp_277 = temp_265 * vp_c6.data[49].z;
    // 0x000668: 0x4C6810180CA7070E Fmul
    temp_278 = temp_265 * vp_c6.data[50].z;
    // 0x000670: 0x59A0078000971609 Ffma
    temp_279 = fma(temp_267, temp_184, temp_254);
    // 0x000678: 0x49A0028C00170307 Ffma
    temp_280 = fma(temp_256, vp_c3.data[0].y, temp_274);
    // 0x000688: 0x4C68100C0047020A Fmul
    temp_281 = temp_255 * vp_c3.data[1].x;
    // 0x000690: 0x49A005980C17080F Ffma
    temp_282 = fma(temp_275, vp_c6.data[48].y, temp_276);
    // 0x000698: 0x4C58101002070605 Fadd
    temp_283 = temp_257 + vp_c4.data[8].x;
    // 0x0006A8: 0x5C68100001170404 Fmul
    temp_284 = temp_243 * temp_272;
    // 0x0006B0: 0x5C68100001171212 Fmul
    temp_285 = temp_249 * temp_272;
    // 0x0006B8: 0xEFF07F800907FF04 Ast
    out_attr1.x = temp_284;
    // 0x0006C8: 0x49A0038C0027060B Ffma
    temp_286 = fma(temp_257, vp_c3.data[0].z, temp_280);
    // 0x0006D0: 0xEFF07F800947FF12 Ast
    out_attr1.y = temp_285;
    // 0x0006D8: 0x5C68100001172323 Fmul
    temp_287 = temp_262 * temp_272;
    // 0x0006E8: 0x49A0050C0057030C Ffma
    temp_288 = fma(temp_256, vp_c3.data[1].y, temp_281);
    // 0x0006F0: 0xEFF07F800987FF23 Ast
    out_attr1.z = temp_287;
    // 0x0006F8: 0x4C5830180B270611 Fadd
    temp_289 = 0.0 - vp_c6.data[44].z;
    temp_290 = temp_257 + temp_289;
    // 0x000708: 0x49A006980C57080D Ffma
    temp_291 = fma(temp_275, vp_c6.data[49].y, temp_277);
    // 0x000710: 0x49A007180C970810 Ffma
    temp_292 = fma(temp_275, vp_c6.data[50].y, temp_278);
    // 0x000718: 0x4C5810180B87020A Fadd
    temp_293 = temp_255 + vp_c6.data[46].x;
    // 0x000728: 0x4C58100C00370B0E Fadd
    temp_294 = temp_286 + vp_c3.data[0].w;
    // 0x000730: 0x4C68100C00870208 Fmul
    temp_295 = temp_255 * vp_c3.data[2].x;
    // 0x000738: 0x49A0038C0027050B Ffma
    temp_296 = fma(temp_283, vp_c3.data[0].z, temp_280);
    // 0x000748: 0x49A0099803A71113 Ffma
    temp_297 = fma(temp_290, vp_c6.data[14].z, temp_273);
    // 0x000750: 0x49A0060C00670611 Ffma
    temp_298 = fma(temp_257, vp_c3.data[1].z, temp_288);
    // 0x000758: 0x49A007980C070A0F Ffma
    temp_299 = fma(temp_293, vp_c6.data[48].x, temp_282);
    // 0x000768: 0x49A006980C470A0D Ffma
    temp_300 = fma(temp_293, vp_c6.data[49].x, temp_291);
    // 0x000770: 0x49A008180C870A10 Ffma
    temp_301 = fma(temp_293, vp_c6.data[50].x, temp_292);
    // 0x000778: 0x5C6810000007120A Fmul
    temp_302 = temp_285 * temp_268;
    // 0x000788: 0x49A0040C00970308 Ffma
    temp_303 = fma(temp_256, vp_c3.data[2].y, temp_295);
    // 0x000790: 0x49A0060C0067050C Ffma
    temp_304 = fma(temp_283, vp_c3.data[1].z, temp_288);
    // 0x000798: 0x4C58100C00370B0B Fadd
    temp_305 = temp_296 + vp_c3.data[0].w;
    // 0x0007A8: 0x5C68100000172307 Fmul
    temp_306 = temp_287 * temp_264;
    // 0x0007B0: 0x5C68100000970402 Fmul
    temp_307 = temp_284 * temp_279;
    // 0x0007B8: 0x59A205000017040A Ffma
    temp_308 = 0.0 - temp_302;
    temp_309 = fma(temp_284, temp_264, temp_308);
    // 0x0007C8: 0x49A0040C00A70505 Ffma
    temp_310 = fma(temp_283, vp_c3.data[2].z, temp_303);
    // 0x0007D0: 0x4C58100C00770C0C Fadd
    temp_311 = temp_304 + vp_c3.data[1].w;
    // 0x0007D8: 0x4C68100C02470B01 Fmul
    temp_312 = temp_305 * vp_c3.data[9].x;
    // 0x0007E8: 0x59A2038000971207 Ffma
    temp_313 = 0.0 - temp_306;
    temp_314 = fma(temp_285, temp_279, temp_313);
    // 0x0007F0: 0x59A2010000072302 Ffma
    temp_315 = 0.0 - temp_307;
    temp_316 = fma(temp_287, temp_268, temp_315);
    // 0x0007F8: 0x4C58100C00771111 Fadd
    temp_317 = temp_298 + vp_c3.data[1].w;
    // 0x000808: 0x4C58100C00B70505 Fadd
    temp_318 = temp_310 + vp_c3.data[2].w;
    // 0x000810: 0x4C68101802C70E0E Fmul
    temp_319 = temp_294 * vp_c6.data[11].x;
    // 0x000818: 0x49A0008C02570C00 Ffma
    temp_320 = fma(temp_311, vp_c3.data[9].y, temp_312);
    // 0x000828: 0x5C68100001870707 Fmul
    temp_321 = temp_314 * temp_76;
    // 0x000830: 0x5C68100001870202 Fmul
    temp_322 = temp_316 * temp_76;
    // 0x000838: 0x49A0040C00A70608 Ffma
    temp_323 = fma(temp_257, vp_c3.data[2].z, temp_303);
    // 0x000848: 0x4C58300C03770615 Fadd
    temp_324 = 0.0 - vp_c3.data[13].w;
    temp_325 = temp_257 + temp_324;
    // 0x000850: 0x49A0071802D7110E Ffma
    temp_326 = fma(temp_317, vp_c6.data[11].y, temp_319);
    // 0x000858: 0xEFF07F800B87FF15 Ast
    out_attr3.z = temp_325;
    // 0x000868: 0x49A0000C02670501 Ffma
    temp_327 = fma(temp_318, vp_c3.data[9].z, temp_320);
    // 0x000870: 0x5C68100000770700 Fmul
    temp_328 = temp_321 * temp_321;
    // 0x000878: 0x4C98079803C70006 Mov
    // 0x000888: 0x5C68100001870A0A Fmul
    temp_329 = temp_309 * temp_76;
    // 0x000890: 0x4C58300C03370311 Fadd
    temp_330 = 0.0 - vp_c3.data[12].w;
    temp_331 = temp_256 + temp_330;
    // 0x000898: 0x4C68100C01C70B03 Fmul
    temp_332 = temp_305 * vp_c3.data[7].x;
    // 0x0008A8: 0xEFF07F800B47FF11 Ast
    out_attr3.y = temp_331;
    // 0x0008B0: 0x59A0000000270200 Ffma
    temp_333 = fma(temp_322, temp_322, temp_328);
    // 0x0008B8: 0x51A0031803B71313 Ffma
    temp_334 = fma(temp_297, vp_c6.data[15].x, vp_c6.data[14].w);
    // 0x0008C8: 0x4C68100C02870B06 Fmul
    temp_335 = temp_305 * vp_c3.data[10].x;
    // 0x0008D0: 0xEFF07F801047FF13 Ast
    out_attr8.y = temp_334;
    // 0x0008D8: 0x59A0000000A70A00 Ffma
    temp_336 = fma(temp_329, temp_329, temp_333);
    // 0x0008E8: 0x49A0018C01D70C03 Ffma
    temp_337 = fma(temp_311, vp_c3.data[7].y, temp_332);
    // 0x0008F0: 0x5080000000570000 Mufu
    temp_338 = inversesqrt(temp_336);
    // 0x0008F8: 0x4C58100C00B70808 Fadd
    temp_339 = temp_323 + vp_c3.data[2].w;
    // 0x000908: 0x4C68100C02070B0B Fmul
    temp_340 = temp_305 * vp_c3.data[8].x;
    // 0x000910: 0xEFF07F800C87FF08 Ast
    out_attr4.z = temp_339;
    // 0x000918: 0x49A0030C02970C06 Ffma
    temp_341 = fma(temp_311, vp_c3.data[10].y, temp_335);
    // 0x000928: 0x49A0018C01E70503 Ffma
    temp_342 = fma(temp_318, vp_c3.data[7].z, temp_337);
    // 0x000930: 0x4C58100C02770101 Fadd
    temp_343 = temp_327 + vp_c3.data[9].w;
    // 0x000938: 0x49A0071802E7080E Ffma
    temp_344 = fma(temp_339, vp_c6.data[11].z, temp_326);
    // 0x000948: 0xEFF07F800787FF01 Ast
    gl_Position.z = temp_343;
    // 0x000950: 0x49A0030C02A70508 Ffma
    temp_345 = fma(temp_318, vp_c3.data[10].z, temp_341);
    // 0x000958: 0x49A0058C02170C0B Ffma
    temp_346 = fma(temp_311, vp_c3.data[8].y, temp_340);
    // 0x000968: 0x4C58100C01F70306 Fadd
    temp_347 = temp_342 + vp_c3.data[7].w;
    // 0x000970: 0x5C68100000070A03 Fmul
    temp_348 = temp_329 * temp_338;
    // 0x000978: 0xEFF07F800707FF06 Ast
    gl_Position.x = temp_347;
    // 0x000988: 0x5C68100000070701 Fmul
    temp_349 = temp_321 * temp_338;
    // 0x000990: 0xEFF07F800887FF03 Ast
    out_attr0.z = temp_348;
    // 0x000998: 0x5C68100000070202 Fmul
    temp_350 = temp_322 * temp_338;
    // 0x0009A8: 0xEFF07F800807FF01 Ast
    out_attr0.x = temp_349;
    // 0x0009B0: 0x49A0058C0227050B Ffma
    temp_351 = fma(temp_318, vp_c3.data[8].z, temp_346);
    // 0x0009B8: 0xEFF07F800847FF02 Ast
    out_attr0.y = temp_350;
    // 0x0009C8: 0x5C68100000371205 Fmul
    temp_352 = temp_285 * temp_348;
    // 0x0009D0: 0x5C68100000172306 Fmul
    temp_353 = temp_287 * temp_349;
    // 0x0009D8: 0x5C68100000270400 Fmul
    temp_354 = temp_284 * temp_350;
    // 0x0009E8: 0x4C98079803070017 Mov
    // 0x0009F0: 0x4C6810180BB70F0F Fmul
    temp_355 = temp_299 * vp_c6.data[46].w;
    // 0x0009F8: 0x4C6810180BB70D0D Fmul
    temp_356 = temp_300 * vp_c6.data[46].w;
    // 0x000A08: 0xEFF07F801107FF0F Ast
    out_attr9.x = temp_355;
    // 0x000A10: 0x59A2028000272305 Ffma
    temp_357 = 0.0 - temp_352;
    temp_358 = fma(temp_287, temp_350, temp_357);
    // 0x000A18: 0xEFF07F801147FF0D Ast
    out_attr9.y = temp_356;
    // 0x000A28: 0x59A2030000370406 Ffma
    temp_359 = 0.0 - temp_353;
    temp_360 = fma(temp_284, temp_348, temp_359);
    // 0x000A30: 0x59A2000000171212 Ffma
    temp_361 = 0.0 - temp_354;
    temp_362 = fma(temp_285, temp_349, temp_361);
    // 0x000A38: 0x51A00B9802F70E0E Ffma
    temp_363 = fma(temp_344, vp_c6.data[12].x, vp_c6.data[11].w);
    // 0x000A48: 0x4C6810180BB71010 Fmul
    temp_364 = temp_301 * vp_c6.data[46].w;
    // 0x000A50: 0xEFF07F801007FF0E Ast
    out_attr8.x = temp_363;
    // 0x000A58: 0x4C58100C02B70808 Fadd
    temp_365 = temp_345 + vp_c3.data[10].w;
    // 0x000A68: 0xEFF07F801187FF10 Ast
    out_attr9.z = temp_364;
    // 0x000A70: 0x4C58100C02370B0B Fadd
    temp_366 = temp_351 + vp_c3.data[8].w;
    // 0x000A78: 0xEFF07F8007C7FF08 Ast
    gl_Position.w = temp_365;
    // 0x000A88: 0x5C68100001870505 Fmul
    temp_367 = temp_358 * temp_76;
    // 0x000A90: 0xEFF07F800747FF0B Ast
    gl_Position.y = temp_366;
    // 0x000A98: 0x5C68100001870606 Fmul
    temp_368 = temp_360 * temp_76;
    // 0x000AA8: 0xEFF07F800A07FF05 Ast
    out_attr2.x = temp_367;
    // 0x000AB0: 0x5C68100001871212 Fmul
    temp_369 = temp_362 * temp_76;
    // 0x000AB8: 0xEFF07F800A47FF06 Ast
    out_attr2.y = temp_368;
    // 0x000AC8: 0xEFF07F800A87FF12 Ast
    out_attr2.z = temp_369;
    // 0x000AD0: 0xE30000000007000F Exit
    return;
}
