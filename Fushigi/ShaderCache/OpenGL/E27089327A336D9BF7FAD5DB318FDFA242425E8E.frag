#version 450 core
#extension GL_ARB_gpu_shader_int64 : enable
#extension GL_ARB_shader_ballot : enable
#extension GL_ARB_shader_group_vote : enable
#extension GL_EXT_shader_image_load_formatted : enable
#extension GL_EXT_texture_shadow_lod : enable
#extension GL_ARB_fragment_shader_interlock : enable
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

layout (binding = 6, std140) uniform _fp_c5
{
    precise vec4 data[4096];
} fp_c5;

layout (binding = 7, std140) uniform _fp_c6
{
    precise vec4 data[4096];
} fp_c6;

layout (binding = 4, std140) uniform _fp_c3
{
    precise vec4 data[4096];
} fp_c3;

layout (binding = 2, std140) uniform _fp_c1
{
    precise vec4 data[4096];
} fp_c1;

layout (binding = 0) uniform sampler2D fp_t_tcb_24;
layout (binding = 1) uniform sampler2D fp_t_tcb_26;
layout (binding = 2) uniform sampler2D fp_t_tcb_36;
layout (binding = 3) uniform samplerCubeArray fp_t_tcb_14;
layout (binding = 4) uniform samplerCube fp_t_tcb_16;
layout (binding = 5) uniform samplerCube fp_t_tcb_18;
layout (binding = 6) uniform sampler2D fp_t_tcb_28;
layout (binding = 7) uniform sampler2D fp_t_tcb_20;
layout (binding = 8) uniform sampler3D fp_t_cb7_20;
layout (location = 0) in vec4 in_attr0;
layout (location = 1) in vec4 in_attr1;
layout (location = 2) in vec4 in_attr2;
layout (location = 3) in vec4 in_attr3;
layout (location = 4) in vec4 in_attr4;
layout (location = 5) in vec4 in_attr5;
layout (location = 7) in vec4 in_attr7;
layout (location = 8) in vec4 in_attr8;

layout (location = 0) out vec4 out_attr0;
layout (location = 1) out vec4 out_attr1;


void main()
{
    precise float temp_0;
    precise float temp_1;
    precise vec4 temp_2;
    precise float temp_3;
    precise float temp_4;
    precise float temp_5;
    precise float temp_6;
    bool temp_7;
    precise vec2 temp_8;
    precise float temp_9;
    precise float temp_10;
    precise vec2 temp_11;
    precise float temp_12;
    precise float temp_13;
    precise float temp_14;
    precise float temp_15;
    precise float temp_16;
    precise float temp_17;
    precise float temp_18;
    precise float temp_19;
    precise float temp_20;
    precise float temp_21;
    precise float temp_22;
    precise float temp_23;
    precise float temp_24;
    precise float temp_25;
    precise float temp_26;
    precise float temp_27;
    precise float temp_28;
    precise float temp_29;
    precise float temp_30;
    precise float temp_31;
    precise float temp_32;
    precise float temp_33;
    precise float temp_34;
    precise float temp_35;
    precise float temp_36;
    precise float temp_37;
    precise float temp_38;
    precise float temp_39;
    precise float temp_40;
    precise float temp_41;
    precise float temp_42;
    precise float temp_43;
    precise float temp_44;
    precise float temp_45;
    precise float temp_46;
    precise float temp_47;
    precise float temp_48;
    precise float temp_49;
    precise float temp_50;
    precise float temp_51;
    precise float temp_52;
    precise float temp_53;
    precise float temp_54;
    precise float temp_55;
    precise float temp_56;
    precise float temp_57;
    precise float temp_58;
    precise float temp_59;
    precise float temp_60;
    precise float temp_61;
    precise float temp_62;
    precise float temp_63;
    precise float temp_64;
    precise float temp_65;
    precise float temp_66;
    precise float temp_67;
    precise float temp_68;
    precise float temp_69;
    precise float temp_70;
    precise float temp_71;
    precise float temp_72;
    precise float temp_73;
    precise float temp_74;
    precise float temp_75;
    precise float temp_76;
    precise float temp_77;
    precise float temp_78;
    precise float temp_79;
    precise float temp_80;
    precise float temp_81;
    precise float temp_82;
    precise float temp_83;
    precise float temp_84;
    precise float temp_85;
    precise float temp_86;
    precise float temp_87;
    precise float temp_88;
    precise float temp_89;
    precise float temp_90;
    precise float temp_91;
    precise float temp_92;
    precise float temp_93;
    precise float temp_94;
    precise float temp_95;
    precise float temp_96;
    precise float temp_97;
    precise float temp_98;
    precise float temp_99;
    precise float temp_100;
    precise float temp_101;
    precise float temp_102;
    precise float temp_103;
    precise float temp_104;
    precise float temp_105;
    precise float temp_106;
    precise float temp_107;
    precise float temp_108;
    precise float temp_109;
    precise float temp_110;
    precise float temp_111;
    precise float temp_112;
    precise float temp_113;
    precise float temp_114;
    precise float temp_115;
    precise float temp_116;
    precise float temp_117;
    precise float temp_118;
    precise float temp_119;
    precise float temp_120;
    precise float temp_121;
    precise float temp_122;
    precise float temp_123;
    precise float temp_124;
    precise float temp_125;
    precise float temp_126;
    precise float temp_127;
    precise float temp_128;
    precise float temp_129;
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
    precise float temp_192;
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
    precise float temp_203;
    precise float temp_204;
    precise float temp_205;
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
    precise vec3 temp_233;
    precise float temp_234;
    precise float temp_235;
    precise float temp_236;
    precise vec3 temp_237;
    precise float temp_238;
    precise float temp_239;
    precise float temp_240;
    precise vec3 temp_241;
    precise float temp_242;
    precise float temp_243;
    precise float temp_244;
    precise float temp_245;
    precise float temp_246;
    precise float temp_247;
    precise vec3 temp_248;
    precise float temp_249;
    precise float temp_250;
    precise float temp_251;
    precise vec3 temp_252;
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
    // 0x000008: 0x4C98079809A70025 Mov
    // 0x000010: 0xE003FF87CFF7FF00 Ipa
    // 0x000018: 0x5080000000470000 Mufu
    // 0x000028: 0xE043FF8D0007FF1D Ipa
    temp_0 = in_attr5.x;
    // 0x000030: 0xE043FF8D4007FF1C Ipa
    temp_1 = in_attr5.y;
    // 0x000038: 0xD8320241A1C71D18 Texs
    temp_2 = texture(fp_t_tcb_24, vec2(temp_0, temp_1)).xyzw;
    temp_3 = temp_2.x;
    temp_4 = temp_2.y;
    temp_5 = temp_2.z;
    temp_6 = temp_2.w;
    // 0x000048: 0x5C98078001B70007 Mov
    // 0x000050: 0x4BB1839406070707 Fsetp
    temp_7 = temp_6 < fp_c5.data[24].x;
    // 0x000058: 0xE33000000000000F Kil
    if (temp_7)
    {
        discard;
    }
    // 0x000068: 0xD830026FF1C71D02 Texs
    temp_8 = texture(fp_t_tcb_26, vec2(temp_0, temp_1)).xy;
    temp_9 = temp_8.x;
    temp_10 = temp_8.y;
    // 0x000070: 0xD830036FF1C71D16 Texs
    temp_11 = texture(fp_t_tcb_36, vec2(temp_0, temp_1)).xy;
    temp_12 = temp_11.x;
    temp_13 = temp_11.y;
    // 0x000078: 0xE043FF8A0007FF0D Ipa
    temp_14 = in_attr2.x;
    // 0x000088: 0xE043FF890007FF0E Ipa
    temp_15 = in_attr1.x;
    // 0x000090: 0xE043FF8A4007FF0A Ipa
    temp_16 = in_attr2.y;
    // 0x000098: 0xE043FF880007FF04 Ipa
    temp_17 = in_attr0.x;
    // 0x0000A8: 0xE043FF894007FF0B Ipa
    temp_18 = in_attr1.y;
    // 0x0000B0: 0xE043FF884007FF09 Ipa
    temp_19 = in_attr0.y;
    // 0x0000B8: 0xE043FF8A8007FF0C Ipa
    temp_20 = in_attr2.z;
    // 0x0000C8: 0xE043FF898007FF0F Ipa
    temp_21 = in_attr1.z;
    // 0x0000D0: 0xE043FF888007FF08 Ipa
    temp_22 = in_attr0.z;
    // 0x0000D8: 0xE043FF8B0007FF01 Ipa
    temp_23 = in_attr3.x;
    // 0x0000E8: 0xE043FF8B4007FF05 Ipa
    temp_24 = in_attr3.y;
    // 0x0000F0: 0xE043FF8B8007FF06 Ipa
    temp_25 = in_attr3.z;
    // 0x0000F8: 0x4C58101408172525 Fadd
    temp_26 = fp_c6.data[38].z + fp_c5.data[32].y;
    // 0x000108: 0xE003FF870FF7FF21 Ipa
    temp_27 = gl_FragCoord.x;
    temp_28 = support_buffer.render_scale[0];
    temp_29 = temp_27 / temp_28;
    // 0x000110: 0x4C58301407B71A29 Fadd
    temp_30 = 0.0 - fp_c5.data[30].w;
    temp_31 = temp_5 + temp_30;
    // 0x000118: 0xE003FF874FF7FF20 Ipa
    temp_32 = gl_FragCoord.y;
    temp_33 = support_buffer.render_scale[0];
    temp_34 = temp_32 / temp_33;
    // 0x000128: 0x4C98079C0207002B Mov
    // 0x000130: 0x5C68100000D70D10 Fmul
    temp_35 = temp_14 * temp_14;
    // 0x000138: 0x5C68100000E70E12 Fmul
    temp_36 = temp_15 * temp_15;
    // 0x000148: 0x59A0080000A70A11 Ffma
    temp_37 = fma(temp_16, temp_16, temp_35);
    // 0x000150: 0x5C68100000470410 Fmul
    temp_38 = temp_17 * temp_17;
    // 0x000158: 0x59A0090000B70B12 Ffma
    temp_39 = fma(temp_18, temp_18, temp_36);
    // 0x000168: 0x59A0088000C70C11 Ffma
    temp_40 = fma(temp_20, temp_20, temp_37);
    // 0x000170: 0x59A0080000970915 Ffma
    temp_41 = fma(temp_19, temp_19, temp_38);
    // 0x000178: 0x5080000000571113 Mufu
    temp_42 = inversesqrt(temp_40);
    // 0x000188: 0x59A0090000F70F12 Ffma
    temp_43 = fma(temp_21, temp_21, temp_39);
    // 0x000190: 0x5C68100000170110 Fmul
    temp_44 = temp_23 * temp_23;
    // 0x000198: 0x5080000000571214 Mufu
    temp_45 = inversesqrt(temp_43);
    // 0x0001A8: 0x4C68100C04A72121 Fmul
    temp_46 = temp_29 * fp_c3.data[18].z;
    // 0x0001B0: 0x4C68100C04B72020 Fmul
    temp_47 = temp_34 * fp_c3.data[18].w;
    // 0x0001B8: 0x59A00A8000870815 Ffma
    temp_48 = fma(temp_22, temp_22, temp_41);
    // 0x0001C8: 0x508000000057151B Mufu
    temp_49 = inversesqrt(temp_48);
    // 0x0001D0: 0x59A0080000570510 Ffma
    temp_50 = fma(temp_24, temp_24, temp_44);
    // 0x0001D8: 0x5C68100001370D0D Fmul
    temp_51 = temp_14 * temp_42;
    // 0x0001E8: 0x5C68100001370A0A Fmul
    temp_52 = temp_16 * temp_42;
    // 0x0001F0: 0x5C68100001370C0C Fmul
    temp_53 = temp_20 * temp_42;
    // 0x0001F8: 0x59A0080000670613 Ffma
    temp_54 = fma(temp_25, temp_25, temp_50);
    // 0x000208: 0x5C68100001470E10 Fmul
    temp_55 = temp_15 * temp_45;
    // 0x000210: 0x5080000000571313 Mufu
    temp_56 = inversesqrt(temp_54);
    // 0x000218: 0x5C68100001470B0B Fmul
    temp_57 = temp_18 * temp_45;
    // 0x000228: 0x5C68100001470F0F Fmul
    temp_58 = temp_21 * temp_45;
    // 0x000230: 0x5C68100001B70909 Fmul
    temp_59 = temp_19 * temp_49;
    // 0x000238: 0x5C68100001B7080E Fmul
    temp_60 = temp_22 * temp_49;
    // 0x000248: 0x5C68100001B7041B Fmul
    temp_61 = temp_17 * temp_49;
    // 0x000250: 0x4C58301407B71815 Fadd
    temp_62 = 0.0 - fp_c5.data[30].w;
    temp_63 = temp_3 + temp_62;
    // 0x000258: 0x5C69100001370108 Fmul
    temp_64 = 0.0 - temp_56;
    temp_65 = temp_23 * temp_64;
    // 0x000268: 0x5C69100001370505 Fmul
    temp_66 = 0.0 - temp_56;
    temp_67 = temp_24 * temp_66;
    // 0x000270: 0x5C69100001370606 Fmul
    temp_68 = 0.0 - temp_56;
    temp_69 = temp_25 * temp_68;
    // 0x000278: 0x4C98079800A70013 Mov
    // 0x000288: 0x4C58301805C70801 Fadd
    temp_70 = 0.0 - fp_c6.data[23].x;
    temp_71 = temp_65 + temp_70;
    // 0x000290: 0x4C58301805D70523 Fadd
    temp_72 = 0.0 - fp_c6.data[23].y;
    temp_73 = temp_67 + temp_72;
    // 0x000298: 0xF0F0000034170000 Depbar
    // 0x0002A8: 0x5C68100000370304 Fmul
    temp_74 = temp_10 * temp_10;
    // 0x0002B0: 0x5C68100000370D0D Fmul
    temp_75 = temp_51 * temp_10;
    // 0x0002B8: 0x5C68100000370C0C Fmul
    temp_76 = temp_53 * temp_10;
    // 0x0002C8: 0x59A0020000270204 Ffma
    temp_77 = fma(temp_9, temp_9, temp_74);
    // 0x0002D0: 0x59A006800107020D Ffma
    temp_78 = fma(temp_9, temp_55, temp_75);
    // 0x0002D8: 0x4C58301805E70610 Fadd
    temp_79 = 0.0 - fp_c6.data[23].z;
    temp_80 = temp_69 + temp_79;
    // 0x0002E8: 0x59A0060000F7020C Ffma
    temp_81 = fma(temp_9, temp_58, temp_76);
    // 0x0002F0: 0x4C9807980097000F Mov
    // 0x0002F8: 0x385D103F80070411 Fadd
    temp_82 = 0.0 - temp_77;
    temp_83 = temp_82 + 1.0;
    temp_84 = clamp(temp_83, 0.0, 1.0);
    // 0x000308: 0x5C68100000370A04 Fmul
    temp_85 = temp_52 * temp_10;
    // 0x000310: 0x5080000000871112 Mufu
    temp_86 = sqrt(temp_84);
    // 0x000318: 0x5C6810000017010A Fmul
    temp_87 = temp_71 * temp_71;
    // 0x000328: 0x59A0020000B70204 Ffma
    temp_88 = fma(temp_9, temp_57, temp_85);
    // 0x000330: 0x59A005000237230A Ffma
    temp_89 = fma(temp_73, temp_73, temp_87);
    // 0x000338: 0x59A0068001271B0D Ffma
    temp_90 = fma(temp_61, temp_86, temp_78);
    // 0x000348: 0x59A0020001270904 Ffma
    temp_91 = fma(temp_59, temp_86, temp_88);
    // 0x000350: 0x59A005000107100A Ffma
    temp_92 = fma(temp_80, temp_80, temp_89);
    // 0x000358: 0x59A0060001270E0E Ffma
    temp_93 = fma(temp_60, temp_86, temp_81);
    // 0x000368: 0x5080000000570A0A Mufu
    temp_94 = inversesqrt(temp_92);
    // 0x000370: 0x5C68100000D70D02 Fmul
    temp_95 = temp_90 * temp_90;
    // 0x000378: 0x59A0010000470403 Ffma
    temp_96 = fma(temp_91, temp_91, temp_95);
    // 0x000388: 0x5C68100000A70101 Fmul
    temp_97 = temp_71 * temp_94;
    // 0x000390: 0x59A0018000E70E03 Ffma
    temp_98 = fma(temp_93, temp_93, temp_96);
    // 0x000398: 0x5C68100000A72323 Fmul
    temp_99 = temp_73 * temp_94;
    // 0x0003A8: 0x5080000000570303 Mufu
    temp_100 = inversesqrt(temp_98);
    // 0x0003B0: 0x5C68100000A71010 Fmul
    temp_101 = temp_80 * temp_94;
    // 0x0003B8: 0x4C9807980087000A Mov
    // 0x0003C8: 0x5C68100000170802 Fmul
    temp_102 = temp_65 * temp_97;
    // 0x0003D0: 0x59A0010002370509 Ffma
    temp_103 = fma(temp_67, temp_99, temp_102);
    // 0x0003D8: 0x5C68100000370D0B Fmul
    temp_104 = temp_90 * temp_100;
    // 0x0003E8: 0x5C6810000037040C Fmul
    temp_105 = temp_91 * temp_100;
    // 0x0003F0: 0x59A4048001070611 Ffma
    temp_106 = fma(temp_69, temp_101, temp_103);
    temp_107 = clamp(temp_106, 0.0, 1.0);
    // 0x0003F8: 0x5C68100000370E09 Fmul
    temp_108 = temp_93 * temp_100;
    // 0x000408: 0x01040DF760C7F004 Mov32i
    // 0x000410: 0x0103F0000007F00E Mov32i
    // 0x000418: 0x5C68100000870B02 Fmul
    temp_109 = temp_104 * temp_65;
    // 0x000428: 0x5C68100000170B12 Fmul
    temp_110 = temp_104 * temp_97;
    // 0x000430: 0x49A2020400071104 Ffma
    temp_111 = fma(temp_107, fp_c1.data[0].x, -6.98316002);
    // 0x000438: 0x59A0010000570C03 Ffma
    temp_112 = fma(temp_105, temp_67, temp_109);
    // 0x000448: 0x5C68100000471111 Fmul
    temp_113 = temp_107 * temp_111;
    // 0x000450: 0x4C59101800470A04 Fadd
    temp_114 = 0.0 - fp_c6.data[2].x;
    temp_115 = temp_114 + fp_c6.data[1].x;
    // 0x000458: 0x59A4018000670902 Ffma
    temp_116 = fma(temp_108, temp_69, temp_112);
    temp_117 = clamp(temp_116, 0.0, 1.0);
    // 0x000468: 0x4C69101805C7010A Fmul
    temp_118 = 0.0 - fp_c6.data[23].x;
    temp_119 = temp_97 * temp_118;
    // 0x000470: 0x32A0073F00070C01 Ffma
    temp_120 = fma(temp_105, 0.5, 0.5);
    // 0x000478: 0x4C5910180067130E Fadd
    temp_121 = 0.0 - fp_c6.data[2].z;
    temp_122 = temp_121 + fp_c6.data[1].z;
    // 0x000488: 0x4C6810180A071616 Fmul
    temp_123 = temp_12 * fp_c6.data[40].x;
    // 0x000490: 0x5C62578000C70B13 Fmnmx
    temp_124 = abs(temp_104);
    temp_125 = abs(temp_105);
    temp_126 = max(temp_124, temp_125);
    // 0x000498: 0x3859103F80070203 Fadd
    temp_127 = 0.0 - temp_117;
    temp_128 = temp_127 + 1.0;
    // 0x0004A8: 0x5C9000800117001B Rro
    // 0x0004B0: 0x51A0021800870104 Ffma
    temp_129 = fma(temp_120, temp_115, fp_c6.data[2].x);
    // 0x0004B8: 0x51A00A9407B71715 Ffma
    temp_130 = fma(temp_13, temp_63, fp_c5.data[30].w);
    // 0x0004C8: 0x51A0149407B71729 Ffma
    temp_131 = fma(temp_13, temp_31, fp_c5.data[30].w);
    // 0x0004D0: 0x386013BF80071616 Fmnmx
    temp_132 = min(temp_123, 1.0);
    // 0x0004D8: 0x4C6810180907030D Fmul
    temp_133 = temp_128 * fp_c6.data[36].x;
    // 0x0004E8: 0x4C59101800570F03 Fadd
    temp_134 = 0.0 - fp_c6.data[2].y;
    temp_135 = temp_134 + fp_c6.data[1].y;
    // 0x0004F0: 0x5080400000370D0D Mufu
    temp_136 = abs(temp_133);
    temp_137 = log2(temp_136);
    // 0x0004F8: 0x49A1051805D7230F Ffma
    temp_138 = 0.0 - fp_c6.data[23].y;
    temp_139 = fma(temp_99, temp_138, temp_119);
    // 0x000508: 0x5C68100000270B0A Fmul
    temp_140 = temp_104 * temp_117;
    // 0x000510: 0x59A0090002370C23 Ffma
    temp_141 = fma(temp_105, temp_99, temp_110);
    // 0x000518: 0x51A0019800970103 Ffma
    temp_142 = fma(temp_120, temp_135, fp_c6.data[2].y);
    // 0x000528: 0x51A0071800A70101 Ffma
    temp_143 = fma(temp_120, temp_122, fp_c6.data[2].z);
    // 0x000530: 0x5C68100000270C0E Fmul
    temp_144 = temp_105 * temp_117;
    // 0x000538: 0x32A2044000070A0A Ffma
    temp_145 = 0.0 - temp_65;
    temp_146 = fma(temp_140, 2.0, temp_145);
    // 0x000548: 0x5C68100000270908 Fmul
    temp_147 = temp_108 * temp_117;
    // 0x000550: 0x49A5079805E7100F Ffma
    temp_148 = 0.0 - fp_c6.data[23].z;
    temp_149 = fma(temp_101, temp_148, temp_139);
    temp_150 = clamp(temp_149, 0.0, 1.0);
    // 0x000558: 0x59A4118001070923 Ffma
    temp_151 = fma(temp_108, temp_101, temp_141);
    temp_152 = clamp(temp_151, 0.0, 1.0);
    // 0x000568: 0x4C68101809170D12 Fmul
    temp_153 = temp_137 * fp_c6.data[36].y;
    // 0x000570: 0x32A202C000070E0D Ffma
    temp_154 = 0.0 - temp_67;
    temp_155 = fma(temp_144, 2.0, temp_154);
    // 0x000578: 0x32A203400007080E Ffma
    temp_156 = 0.0 - temp_69;
    temp_157 = fma(temp_147, 2.0, temp_156);
    // 0x000588: 0x4C60178400271606 Fmnmx
    temp_158 = max(temp_132, fp_c1.data[0].z);
    // 0x000590: 0x5C90008001270014 Rro
    // 0x000598: 0x5C60578001370912 Fmnmx
    temp_159 = abs(temp_108);
    temp_160 = max(temp_159, temp_126);
    // 0x0005A8: 0x5084000000271414 Mufu
    temp_161 = exp2(temp_153);
    temp_162 = clamp(temp_161, 0.0, 1.0);
    // 0x0005B0: 0x4C69101805C70B13 Fmul
    temp_163 = 0.0 - fp_c6.data[23].x;
    temp_164 = temp_104 * temp_163;
    // 0x0005B8: 0x5080000000471212 Mufu
    temp_165 = 1.0 / temp_160;
    // 0x0005C8: 0x5C62578000D70A08 Fmnmx
    temp_166 = abs(temp_146);
    temp_167 = abs(temp_155);
    temp_168 = max(temp_166, temp_167);
    // 0x0005D0: 0x51A4030400270605 Ffma
    temp_169 = fma(temp_158, temp_158, fp_c1.data[0].z);
    temp_170 = clamp(temp_169, 0.0, 1.0);
    // 0x0005D8: 0x38681040E007062F Fmul
    temp_171 = temp_158 * 7.0;
    // 0x0005E8: 0x49A1099805D70C28 Ffma
    temp_172 = 0.0 - fp_c6.data[23].y;
    temp_173 = fma(temp_105, temp_172, temp_164);
    // 0x0005F0: 0x5C60578000870E16 Fmnmx
    temp_174 = abs(temp_157);
    temp_175 = max(temp_174, temp_168);
    // 0x0005F8: 0x5080000000271B08 Mufu
    temp_176 = exp2(temp_113);
    // 0x000608: 0x5C68100001472525 Fmul
    temp_177 = temp_26 * temp_162;
    // 0x000610: 0x5080000000471613 Mufu
    temp_178 = 1.0 / temp_175;
    // 0x000618: 0x49A5141805E70928 Ffma
    temp_179 = 0.0 - fp_c6.data[23].z;
    temp_180 = fma(temp_108, temp_179, temp_173);
    temp_181 = clamp(temp_180, 0.0, 1.0);
    // 0x000628: 0x5C68100001270C11 Fmul
    temp_182 = temp_105 * temp_165;
    // 0x000630: 0x4C58301407B7190C Fadd
    temp_183 = 0.0 - fp_c5.data[30].w;
    temp_184 = temp_4 + temp_183;
    // 0x000638: 0x5C68100001270B10 Fmul
    temp_185 = temp_104 * temp_165;
    // 0x000648: 0x5C69100001270912 Fmul
    temp_186 = 0.0 - temp_165;
    temp_187 = temp_108 * temp_186;
    // 0x000650: 0x5C68100000570514 Fmul
    temp_188 = temp_170 * temp_170;
    // 0x000658: 0x4C68101808C72527 Fmul
    temp_189 = temp_177 * fp_c6.data[35].x;
    // 0x000668: 0x4C68101808D72526 Fmul
    temp_190 = temp_177 * fp_c6.data[35].y;
    // 0x000670: 0x4C68101808E72525 Fmul
    temp_191 = temp_177 * fp_c6.data[35].z;
    // 0x000678: 0x59A2118001472316 Ffma
    temp_192 = 0.0 - temp_152;
    temp_193 = fma(temp_152, temp_188, temp_192);
    // 0x000688: 0x5C68100001370A09 Fmul
    temp_194 = temp_146 * temp_178;
    // 0x000690: 0x5C68100001370D0A Fmul
    temp_195 = temp_155 * temp_178;
    // 0x000698: 0x51A0061407B7170D Ffma
    temp_196 = fma(temp_13, temp_184, fp_c5.data[30].w);
    // 0x0006A8: 0x59A1040000871514 Ffma
    temp_197 = 0.0 - temp_176;
    temp_198 = fma(temp_130, temp_197, temp_176);
    // 0x0006B0: 0x5C69100001370E0B Fmul
    temp_199 = 0.0 - temp_178;
    temp_200 = temp_157 * temp_199;
    // 0x0006B8: 0x4C68101801672813 Fmul
    temp_201 = temp_181 * fp_c6.data[5].z;
    // 0x0006C8: 0x4C6810180147280E Fmul
    temp_202 = temp_181 * fp_c6.data[5].x;
    // 0x0006D0: 0x49A1129408272522 Ffma
    temp_203 = 0.0 - fp_c5.data[32].z;
    temp_204 = fma(temp_191, temp_203, temp_191);
    // 0x0006D8: 0x59A1040000870D0C Ffma
    temp_205 = 0.0 - temp_176;
    temp_206 = fma(temp_196, temp_205, temp_176);
    // 0x0006E8: 0x59A1040000872908 Ffma
    temp_207 = 0.0 - temp_176;
    temp_208 = fma(temp_131, temp_207, temp_176);
    // 0x0006F0: 0x5C58100001471514 Fadd
    temp_209 = temp_130 + temp_198;
    // 0x0006F8: 0x1E23EA2F98371313 Fmul32i
    temp_210 = temp_201 * 0.318309873;
    // 0x000708: 0x1E23EA2F98370E15 Fmul32i
    temp_211 = temp_202 * 0.318309873;
    // 0x000710: 0x51A00B0400B72323 Ffma
    temp_212 = fma(temp_152, temp_193, fp_c1.data[2].w);
    // 0x000718: 0x4C6810180157280E Fmul
    temp_213 = temp_181 * fp_c6.data[5].y;
    // 0x000728: 0x5080000000472323 Mufu
    temp_214 = 1.0 / temp_212;
    // 0x000730: 0x5C58100000872908 Fadd
    temp_215 = temp_131 + temp_208;
    // 0x000738: 0x5C58100000C70D0C Fadd
    temp_216 = temp_196 + temp_206;
    // 0x000748: 0x59A10A8001571424 Ffma
    temp_217 = 0.0 - temp_211;
    temp_218 = fma(temp_209, temp_217, temp_211);
    // 0x000750: 0x49A113940827270D Ffma
    temp_219 = 0.0 - fp_c5.data[32].z;
    temp_220 = fma(temp_189, temp_219, temp_189);
    // 0x000758: 0x49A113140827261B Ffma
    temp_221 = 0.0 - fp_c5.data[32].z;
    temp_222 = fma(temp_190, temp_221, temp_190);
    // 0x000768: 0x1E23EA2F98370E0E Fmul32i
    temp_223 = temp_213 * 0.318309873;
    // 0x000770: 0x59A1098001370808 Ffma
    temp_224 = 0.0 - temp_210;
    temp_225 = fma(temp_215, temp_224, temp_210);
    // 0x000778: 0x3868104080070613 Fmul
    temp_226 = temp_158 * 4.0;
    // 0x000788: 0x5C58100000D72424 Fadd
    temp_227 = temp_218 + temp_220;
    // 0x000790: 0xE043FF904007FF0D Ipa
    temp_228 = in_attr8.y;
    // 0x000798: 0x59A1070000E70C0C Ffma
    temp_229 = 0.0 - temp_223;
    temp_230 = fma(temp_216, temp_229, temp_223);
    // 0x0007A8: 0xE043FF908007FF0E Ipa
    temp_231 = in_attr8.z;
    // 0x0007B0: 0x5C58100002270822 Fadd
    temp_232 = temp_225 + temp_204;
    // 0x0007B8: 0x010000000017F008 Mov32i
    // 0x0007C8: 0xC1BA0143F2F70808 Tex
    temp_233 = textureLod(fp_t_tcb_14, vec4(temp_194, temp_195, temp_200, float(1)), temp_171).xyz;
    temp_234 = temp_233.x;
    temp_235 = temp_233.y;
    temp_236 = temp_233.z;
    // 0x0007D0: 0xC0BA0163EFF71014 Tex
    temp_237 = textureLod(fp_t_tcb_16, vec3(temp_185, temp_182, temp_187), 0.0).xyz;
    temp_238 = temp_237.x;
    temp_239 = temp_237.y;
    temp_240 = temp_237.z;
    // 0x0007D8: 0xD9A201813127101E Texs
    temp_241 = textureLod(fp_t_tcb_18, vec3(temp_185, temp_182, temp_187), temp_226).xyz;
    temp_242 = temp_241.x;
    temp_243 = temp_241.y;
    temp_244 = temp_241.z;
    // 0x0007E8: 0x5C58100001B70C1B Fadd
    temp_245 = temp_230 + temp_222;
    // 0x0007F0: 0xE043FF900007FF0C Ipa
    temp_246 = in_attr8.x;
    // 0x0007F8: 0xDEBA0000C2B70C0C TexB
    temp_247 = texture(fp_t_cb7_20, vec3(temp_246, temp_228, temp_231)).x;
    // 0x000808: 0xD8220282A1C71D1C Texs
    temp_248 = texture(fp_t_tcb_28, vec2(temp_0, temp_1)).xyz;
    temp_249 = temp_248.x;
    temp_250 = temp_248.y;
    temp_251 = temp_248.z;
    // 0x000810: 0xD8220202C2072120 Texs
    temp_252 = texture(fp_t_tcb_20, vec2(temp_46, temp_47)).xyz;
    temp_253 = temp_252.x;
    temp_254 = temp_252.y;
    temp_255 = temp_252.z;
    // 0x000818: 0x5C68100002370523 Fmul
    temp_256 = temp_170 * temp_214;
    // 0x000828: 0x3859103F80070605 Fadd
    temp_257 = 0.0 - temp_158;
    temp_258 = temp_257 + 1.0;
    // 0x000830: 0x1E23E468DB97022E Fmul32i
    temp_259 = temp_117 * 0.193900004;
    // 0x000838: 0x0104066978D7F00B Mov32i
    // 0x000848: 0x4C68101408272727 Fmul
    temp_260 = temp_189 * fp_c5.data[32].z;
    // 0x000850: 0x4C68101408272525 Fmul
    temp_261 = temp_191 * fp_c5.data[32].z;
    // 0x000858: 0x5C68100002372323 Fmul
    temp_262 = temp_256 * temp_256;
    // 0x000868: 0x5C68100000570505 Fmul
    temp_263 = temp_258 * temp_258;
    // 0x000870: 0x5C6810000057052D Fmul
    temp_264 = temp_263 * temp_263;
    // 0x000878: 0x49A0170400372D05 Ffma
    temp_265 = fma(temp_264, fp_c1.data[0].w, temp_259);
    // 0x000888: 0x49A2058400472D0B Ffma
    temp_266 = fma(temp_264, fp_c1.data[1].x, -3.60299993);
    // 0x000890: 0x088BF05D63970505 Fadd32i
    temp_267 = temp_265 + -0.522800028;
    // 0x000898: 0x51A0058400572D0B Ffma
    temp_268 = fma(temp_264, temp_266, fp_c1.data[1].y);
    // 0x0008A8: 0x010410676C97F00D Mov32i
    // 0x0008B0: 0x5C6810000057020E Fmul
    temp_269 = temp_117 * temp_267;
    // 0x0008B8: 0x49A006840067020D Ffma
    temp_270 = fma(temp_117, fp_c1.data[1].z, 8.40400028);
    // 0x0008C8: 0x59A0070000B72D05 Ffma
    temp_271 = fma(temp_264, temp_268, temp_269);
    // 0x0008D0: 0x0103E2CD9E87F00B Mov32i
    // 0x0008D8: 0x51A006840077020D Ffma
    temp_272 = fma(temp_117, temp_270, fp_c1.data[1].w);
    // 0x0008E8: 0x4C5C100400A70510 Fadd
    temp_273 = temp_271 + fp_c1.data[2].z;
    temp_274 = clamp(temp_273, 0.0, 1.0);
    // 0x0008F0: 0x49A2058400872D0B Ffma
    temp_275 = fma(temp_264, fp_c1.data[2].x, -0.168799996);
    // 0x0008F8: 0x51A006840097020D Ffma
    temp_276 = fma(temp_117, temp_272, fp_c1.data[2].y);
    // 0x000908: 0x5C68100000B72D0B Fmul
    temp_277 = temp_264 * temp_275;
    // 0x000910: 0x5C60138000B70D0B Fmnmx
    temp_278 = min(temp_276, temp_277);
    // 0x000918: 0x0103F0000007F00D Mov32i
    // 0x000928: 0x5C5C30000FF70B0B Fadd
    temp_279 = temp_278 + -0.0;
    temp_280 = clamp(temp_279, 0.0, 1.0);
    // 0x000930: 0x32A006BF00070606 Ffma
    temp_281 = fma(temp_158, 0.5, 0.5);
    // 0x000938: 0x5C59100001070B10 Fadd
    temp_282 = 0.0 - temp_280;
    temp_283 = temp_282 + temp_274;
    // 0x000948: 0x5C6812000067060D Fmul
    temp_284 = temp_281 * 0.5;
    temp_285 = temp_284 * temp_281;
    // 0x000950: 0x01040DF760C7F006 Mov32i
    // 0x000958: 0x59A1010000D7020E Ffma
    temp_286 = 0.0 - temp_285;
    temp_287 = fma(temp_117, temp_286, temp_117);
    // 0x000968: 0x59A1140000D72802 Ffma
    temp_288 = 0.0 - temp_285;
    temp_289 = fma(temp_181, temp_288, temp_181);
    // 0x000970: 0x49A2030400070F06 Ffma
    temp_290 = fma(temp_150, fp_c1.data[0].x, -6.98316002);
    // 0x000978: 0x5C58100000E70D0E Fadd
    temp_291 = temp_285 + temp_287;
    // 0x000988: 0x5C58100000270D0D Fadd
    temp_292 = temp_285 + temp_289;
    // 0x000990: 0x5080000000470E02 Mufu
    temp_293 = 1.0 / temp_291;
    // 0x000998: 0x5C68100000670F06 Fmul
    temp_294 = temp_150 * temp_290;
    // 0x0009A8: 0x5080000000470D0D Mufu
    temp_295 = 1.0 / temp_292;
    // 0x0009B0: 0x5C90008000670011 Rro
    // 0x0009B8: 0x5C68120000D70202 Fmul
    temp_296 = temp_293 * 0.5;
    temp_297 = temp_296 * temp_295;
    // 0x0009C8: 0x5C68100000272302 Fmul
    temp_298 = temp_262 * temp_297;
    // 0x0009D0: 0x5C68100000272828 Fmul
    temp_299 = temp_181 * temp_298;
    // 0x0009D8: 0x4C58301407B71902 Fadd
    temp_300 = 0.0 - fp_c5.data[30].w;
    temp_301 = temp_4 + temp_300;
    // 0x0009E8: 0x51A0011407B71702 Ffma
    temp_302 = fma(temp_13, temp_301, fp_c5.data[30].w);
    // 0x0009F0: 0x386C104248070205 Fmul
    temp_303 = temp_302 * 50.0;
    temp_304 = clamp(temp_303, 0.0, 1.0);
    // 0x0009F8: 0x5C68100000570B0F Fmul
    temp_305 = temp_280 * temp_304;
    // 0x000A08: 0x508000000027110B Mufu
    temp_306 = exp2(temp_294);
    // 0x000A10: 0x4C58301407B71805 Fadd
    temp_307 = 0.0 - fp_c5.data[30].w;
    temp_308 = temp_3 + temp_307;
    // 0x000A18: 0x59A007800107020D Ffma
    temp_309 = fma(temp_302, temp_283, temp_305);
    // 0x000A28: 0x51A0029407B71705 Ffma
    temp_310 = fma(temp_13, temp_308, fp_c5.data[30].w);
    // 0x000A30: 0x59A007800107290E Ffma
    temp_311 = fma(temp_131, temp_283, temp_305);
    // 0x000A38: 0x59A0078001070506 Ffma
    temp_312 = fma(temp_310, temp_283, temp_305);
    // 0x000A48: 0x59A1058000B7020F Ffma
    temp_313 = 0.0 - temp_306;
    temp_314 = fma(temp_302, temp_313, temp_306);
    // 0x000A50: 0x5C58100000F70202 Fadd
    temp_315 = temp_302 + temp_314;
    // 0x000A58: 0x59A1058000B7050F Ffma
    temp_316 = 0.0 - temp_306;
    temp_317 = fma(temp_310, temp_316, temp_306);
    // 0x000A68: 0x59A1058000B7290B Ffma
    temp_318 = 0.0 - temp_306;
    temp_319 = fma(temp_131, temp_318, temp_306);
    // 0x000A70: 0x4C68101801570202 Fmul
    temp_320 = temp_315 * fp_c6.data[5].y;
    // 0x000A78: 0x5C58100000F70505 Fadd
    temp_321 = temp_310 + temp_317;
    // 0x000A88: 0x4C6810140827260F Fmul
    temp_322 = temp_190 * fp_c5.data[32].z;
    // 0x000A90: 0x5C58100000B7290B Fadd
    temp_323 = temp_131 + temp_319;
    // 0x000A98: 0x5C68100000272802 Fmul
    temp_324 = temp_299 * temp_320;
    // 0x000AA8: 0x4C68101801470505 Fmul
    temp_325 = temp_321 * fp_c6.data[5].x;
    // 0x000AB0: 0x4C68101801670B0B Fmul
    temp_326 = temp_323 * fp_c6.data[5].z;
    // 0x000AB8: 0x49A0078400C70202 Ffma
    temp_327 = fma(temp_324, fp_c1.data[3].x, temp_322);
    // 0x000AC8: 0x5C68100000572805 Fmul
    temp_328 = temp_299 * temp_325;
    // 0x000AD0: 0x5C68100000B7280B Fmul
    temp_329 = temp_299 * temp_326;
    // 0x000AD8: 0x49A0138400C70505 Ffma
    temp_330 = fma(temp_328, fp_c1.data[3].x, temp_260);
    // 0x000AE8: 0x49A0128400C70B0B Ffma
    temp_331 = fma(temp_329, fp_c1.data[3].x, temp_261);
    // 0x000AF0: 0xF0F0000034270000 Depbar
    // 0x000AF8: 0x49A00A040017040F Ffma
    temp_332 = fma(temp_129, fp_c1.data[0].y, temp_238);
    // 0x000B08: 0xE04BFF8F4007FF04 Ipa
    temp_333 = in_attr7.y;
    temp_334 = clamp(temp_333, 0.0, 1.0);
    // 0x000B10: 0x49A00A8400170315 Ffma
    temp_335 = fma(temp_142, fp_c1.data[0].y, temp_239);
    // 0x000B18: 0x010404000007F003 Mov32i
    // 0x000B28: 0x49A00B0400170101 Ffma
    temp_336 = fma(temp_143, fp_c1.data[0].y, temp_240);
    // 0x000B30: 0x49A00F1808570808 Ffma
    temp_337 = fma(temp_234, fp_c6.data[33].y, temp_242);
    // 0x000B38: 0x49A00F980857091F Ffma
    temp_338 = fma(temp_235, fp_c6.data[33].y, temp_243);
    // 0x000B48: 0x5C58100000F72424 Fadd
    temp_339 = temp_227 + temp_332;
    // 0x000B50: 0x5C58100001571B15 Fadd
    temp_340 = temp_245 + temp_335;
    // 0x000B58: 0x49A0099808570A10 Ffma
    temp_341 = fma(temp_236, fp_c6.data[33].y, temp_244);
    // 0x000B68: 0x5C58100000172201 Fadd
    temp_342 = temp_232 + temp_336;
    // 0x000B70: 0x59A0028000870605 Ffma
    temp_343 = fma(temp_312, temp_337, temp_330);
    // 0x000B78: 0x59A0010001F70D02 Ffma
    temp_344 = fma(temp_309, temp_338, temp_327);
    // 0x000B88: 0x59A1120002471706 Ffma
    temp_345 = 0.0 - temp_339;
    temp_346 = fma(temp_13, temp_345, temp_339);
    // 0x000B90: 0x59A10A8001571708 Ffma
    temp_347 = 0.0 - temp_340;
    temp_348 = fma(temp_13, temp_347, temp_340);
    // 0x000B98: 0x59A0058001070E0B Ffma
    temp_349 = fma(temp_311, temp_341, temp_331);
    // 0x000BA8: 0x59A1008000171709 Ffma
    temp_350 = 0.0 - temp_342;
    temp_351 = fma(temp_13, temp_350, temp_342);
    // 0x000BB0: 0x4C98079406B7000A Mov
    // 0x000BB8: 0x385C103F80071901 Fadd
    temp_352 = temp_4 + 1.0;
    temp_353 = clamp(temp_352, 0.0, 1.0);
    // 0x000BC8: 0x59A0028000671806 Ffma
    temp_354 = fma(temp_3, temp_346, temp_343);
    // 0x000BD0: 0x385C103F80071818 Fadd
    temp_355 = temp_3 + 1.0;
    temp_356 = clamp(temp_355, 0.0, 1.0);
    // 0x000BD8: 0x59A0010000871908 Ffma
    temp_357 = fma(temp_4, temp_348, temp_344);
    // 0x000BE8: 0x59A0058000971A09 Ffma
    temp_358 = fma(temp_5, temp_351, temp_349);
    // 0x000BF0: 0x4C68101809C70A05 Fmul
    temp_359 = fp_c5.data[26].w * fp_c6.data[39].x;
    // 0x000BF8: 0x4C9807980B47000B Mov
    // 0x000C08: 0x385C103F80071A02 Fadd
    temp_360 = temp_5 + 1.0;
    temp_361 = clamp(temp_360, 0.0, 1.0);
    // 0x000C10: 0x5C68100000671818 Fmul
    temp_362 = temp_356 * temp_354;
    // 0x000C18: 0x5C68100000870108 Fmul
    temp_363 = temp_353 * temp_357;
    // 0x000C28: 0x4C68101809D70A06 Fmul
    temp_364 = fp_c5.data[26].w * fp_c6.data[39].y;
    // 0x000C30: 0x4C68101809E70A01 Fmul
    temp_365 = fp_c5.data[26].w * fp_c6.data[39].z;
    // 0x000C38: 0x4C9807980287000A Mov
    // 0x000C48: 0x33A001C000070403 Ffma
    temp_366 = fma(temp_334, -2.0, 3.0);
    // 0x000C50: 0x5C68100000470404 Fmul
    temp_367 = temp_334 * temp_334;
    // 0x000C58: 0x5C68100000970209 Fmul
    temp_368 = temp_361 * temp_358;
    // 0x000C68: 0x5C68100000470304 Fmul
    temp_369 = temp_366 * temp_367;
    // 0x000C70: 0xE043FF8F0007FF03 Ipa
    temp_370 = in_attr7.x;
    // 0x000C78: 0x5C68100000571C05 Fmul
    temp_371 = temp_249 * temp_359;
    // 0x000C88: 0x51A205980B472020 Ffma
    temp_372 = 0.0 - fp_c6.data[45].x;
    temp_373 = fma(temp_253, fp_c6.data[45].x, temp_372);
    // 0x000C90: 0x5C68100000172A02 Fmul
    temp_374 = temp_251 * temp_365;
    // 0x000C98: 0x51A205980B472121 Ffma
    temp_375 = 0.0 - fp_c6.data[45].x;
    temp_376 = fma(temp_254, fp_c6.data[45].x, temp_375);
    // 0x000CA8: 0x51A205980B472C2C Ffma
    temp_377 = 0.0 - fp_c6.data[45].x;
    temp_378 = fma(temp_255, fp_c6.data[45].x, temp_377);
    // 0x000CB0: 0x5C68100000671D06 Fmul
    temp_379 = temp_250 * temp_364;
    // 0x000CB8: 0x49A00C1406C70501 Ffma
    temp_380 = fma(temp_371, fp_c5.data[27].x, temp_362);
    // 0x000CC8: 0x51A0051802872020 Ffma
    temp_381 = fma(temp_373, fp_c6.data[10].x, fp_c6.data[10].x);
    // 0x000CD0: 0x4C98079802A7000B Mov
    // 0x000CD8: 0x4C9807980297000A Mov
    // 0x000CE8: 0x49A0049406C70202 Ffma
    temp_382 = fma(temp_374, fp_c5.data[27].x, temp_368);
    // 0x000CF0: 0x4C68101803770404 Fmul
    temp_383 = temp_369 * fp_c6.data[13].w;
    // 0x000CF8: 0x5C58300002070105 Fadd
    temp_384 = 0.0 - temp_381;
    temp_385 = temp_380 + temp_384;
    // 0x000D08: 0x51A0059802A72C2C Ffma
    temp_386 = fma(temp_378, fp_c6.data[10].z, fp_c6.data[10].z);
    // 0x000D10: 0xE043FF8C8007FF0B Ipa
    temp_387 = in_attr4.z;
    // 0x000D18: 0x51A0051802972121 Ffma
    temp_388 = fma(temp_376, fp_c6.data[10].y, fp_c6.data[10].y);
    // 0x000D28: 0x49A010180BF70509 Ffma
    temp_389 = fma(temp_385, fp_c6.data[47].w, temp_381);
    // 0x000D30: 0x5C58300002C70205 Fadd
    temp_390 = 0.0 - temp_386;
    temp_391 = temp_382 + temp_390;
    // 0x000D38: 0x49A2021803470400 Ffma
    temp_392 = 0.0 - temp_383;
    temp_393 = fma(temp_383, fp_c6.data[13].x, temp_392);
    // 0x000D48: 0x5C60178000972009 Fmnmx
    temp_394 = max(temp_381, temp_389);
    // 0x000D50: 0x49A016180BF70505 Ffma
    temp_395 = fma(temp_391, fp_c6.data[47].w, temp_386);
    // 0x000D58: 0x49A501980BC70C0C Ffma
    temp_396 = 0.0 - fp_c6.data[47].x;
    temp_397 = fma(temp_247, temp_396, temp_370);
    temp_398 = clamp(temp_397, 0.0, 1.0);
    // 0x000D68: 0x49A0041406C70603 Ffma
    temp_399 = fma(temp_379, fp_c5.data[27].x, temp_363);
    // 0x000D70: 0x5080000000370C0C Mufu
    temp_400 = log2(temp_398);
    // 0x000D78: 0x5C60178000572C05 Fmnmx
    temp_401 = max(temp_386, temp_395);
    // 0x000D88: 0x59A0048000070900 Ffma
    temp_402 = fma(temp_394, temp_393, temp_394);
    // 0x000D90: 0x5C58300002170306 Fadd
    temp_403 = 0.0 - temp_388;
    temp_404 = temp_399 + temp_403;
    // 0x000D98: 0x5C59100000070100 Fadd
    temp_405 = 0.0 - temp_380;
    temp_406 = temp_405 + temp_402;
    // 0x000DA8: 0x49A010980BF70606 Ffma
    temp_407 = fma(temp_404, fp_c6.data[47].w, temp_388);
    // 0x000DB0: 0x4C68101803170C08 Fmul
    temp_408 = temp_400 * fp_c6.data[12].y;
    // 0x000DB8: 0x5C60178000672106 Fmnmx
    temp_409 = max(temp_388, temp_407);
    // 0x000DC8: 0x5C9000800087000A Rro
    // 0x000DD0: 0x49A2021803570408 Ffma
    temp_410 = 0.0 - temp_383;
    temp_411 = fma(temp_383, fp_c6.data[13].y, temp_410);
    // 0x000DD8: 0x5080000000270A0A Mufu
    temp_412 = exp2(temp_408);
    // 0x000DE8: 0x49A2021803670404 Ffma
    temp_413 = 0.0 - temp_383;
    temp_414 = fma(temp_383, fp_c6.data[13].z, temp_413);
    // 0x000DF0: 0x59A0030000870608 Ffma
    temp_415 = fma(temp_409, temp_411, temp_409);
    // 0x000DF8: 0x59A0028000470505 Ffma
    temp_416 = fma(temp_401, temp_414, temp_401);
    // 0x000E08: 0x5C59100000870304 Fadd
    temp_417 = 0.0 - temp_399;
    temp_418 = temp_417 + temp_415;
    // 0x000E10: 0x4C68101802B70A06 Fmul
    temp_419 = temp_412 * fp_c6.data[10].w;
    // 0x000E18: 0x5C59100000570205 Fadd
    temp_420 = 0.0 - temp_382;
    temp_421 = temp_420 + temp_416;
    // 0x000E28: 0x4C58100C03870B08 Fadd
    temp_422 = temp_387 + fp_c3.data[14].x;
    // 0x000E30: 0x59A0008000670000 Ffma
    temp_423 = fma(temp_406, temp_419, temp_380);
    // 0x000E38: 0x59A0018000670401 Ffma
    temp_424 = fma(temp_418, temp_419, temp_399);
    // 0x000E48: 0x59A0010000670502 Ffma
    temp_425 = fma(temp_421, temp_419, temp_382);
    // 0x000E50: 0x0103F6000007F005 Mov32i
    // 0x000E58: 0x5C9807800FF70006 Mov
    // 0x000E68: 0x49A37F8C03C70804 Ffma
    temp_426 = 0.0 - fp_c3.data[15].x;
    temp_427 = fma(temp_422, temp_426, -0.0);
    // 0x000E70: 0x5C98078000770003 Mov
    // 0x000E78: 0xE30000000007000F Exit
    out_attr0.x = temp_423;
    out_attr0.y = temp_424;
    out_attr0.z = temp_425;
    out_attr0.w = temp_6;
    out_attr1.x = temp_427;
    out_attr1.y = 0.875;
    out_attr1.z = 0.0;
    out_attr1.w = temp_6;
    return;
}
