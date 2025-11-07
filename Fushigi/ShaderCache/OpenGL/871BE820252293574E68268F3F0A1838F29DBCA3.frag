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

layout (binding = 4, std140) uniform _fp_c3
{
    precise vec4 data[4096];
} fp_c3;

layout (binding = 7, std140) uniform _fp_c6
{
    precise vec4 data[4096];
} fp_c6;

layout (binding = 2, std140) uniform _fp_c1
{
    precise vec4 data[4096];
} fp_c1;

layout (binding = 0) uniform sampler2D fp_t_tcb_24;
layout (binding = 1) uniform sampler2D fp_t_tcb_26;
layout (binding = 2) uniform sampler2D fp_t_tcb_36;
layout (binding = 3) uniform samplerCubeArray fp_t_tcb_14;
layout (binding = 4) uniform samplerCube fp_t_tcb_18;
layout (binding = 5) uniform samplerCube fp_t_tcb_16;
layout (binding = 6) uniform sampler2D fp_t_tcb_20;
layout (binding = 7) uniform sampler3D fp_t_cb7_20;
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
    precise vec2 temp_2;
    precise float temp_3;
    precise float temp_4;
    bool temp_5;
    precise vec2 temp_6;
    precise float temp_7;
    precise float temp_8;
    precise vec3 temp_9;
    precise float temp_10;
    precise float temp_11;
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
    precise vec3 temp_188;
    precise float temp_189;
    precise float temp_190;
    precise float temp_191;
    precise float temp_192;
    precise float temp_193;
    precise vec3 temp_194;
    precise float temp_195;
    precise float temp_196;
    precise float temp_197;
    precise float temp_198;
    precise float temp_199;
    precise vec3 temp_200;
    precise float temp_201;
    precise float temp_202;
    precise float temp_203;
    precise vec3 temp_204;
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
    // 0x000008: 0x4C98079403070017 Mov
    // 0x000010: 0xE003FF87CFF7FF00 Ipa
    // 0x000018: 0x5080000000470000 Mufu
    // 0x000028: 0xE043FF8D0007FF02 Ipa
    temp_0 = in_attr5.x;
    // 0x000030: 0xE043FF8D4007FF03 Ipa
    temp_1 = in_attr5.y;
    // 0x000038: 0xD836024FF0370206 Texs
    temp_2 = texture(fp_t_tcb_24, vec2(temp_0, temp_1)).xw;
    temp_3 = temp_2.x;
    temp_4 = temp_2.y;
    // 0x000048: 0x4BB1839406070707 Fsetp
    temp_5 = temp_4 < fp_c5.data[24].x;
    // 0x000050: 0xE33000000000000F Kil
    if (temp_5)
    {
        discard;
    }
    // 0x000058: 0xD830026FF0370208 Texs
    temp_6 = texture(fp_t_tcb_26, vec2(temp_0, temp_1)).xy;
    temp_7 = temp_6.x;
    temp_8 = temp_6.y;
    // 0x000068: 0xD824036010370212 Texs
    temp_9 = texture(fp_t_tcb_36, vec2(temp_0, temp_1)).xyw;
    temp_10 = temp_9.x;
    temp_11 = temp_9.y;
    temp_12 = temp_9.z;
    // 0x000070: 0xE043FF8A0007FF0A Ipa
    temp_13 = in_attr2.x;
    // 0x000078: 0xE043FF8A4007FF0C Ipa
    temp_14 = in_attr2.y;
    // 0x000088: 0xE043FF8A8007FF0E Ipa
    temp_15 = in_attr2.z;
    // 0x000090: 0xE043FF890007FF11 Ipa
    temp_16 = in_attr1.x;
    // 0x000098: 0xE043FF880007FF04 Ipa
    temp_17 = in_attr0.x;
    // 0x0000A8: 0xE043FF894007FF0F Ipa
    temp_18 = in_attr1.y;
    // 0x0000B0: 0xE043FF884007FF05 Ipa
    temp_19 = in_attr0.y;
    // 0x0000B8: 0xE043FF898007FF0D Ipa
    temp_20 = in_attr1.z;
    // 0x0000C8: 0xE043FF888007FF10 Ipa
    temp_21 = in_attr0.z;
    // 0x0000D0: 0x4C98079403170018 Mov
    // 0x0000D8: 0xE003FF870FF7FF1B Ipa
    temp_22 = gl_FragCoord.x;
    temp_23 = support_buffer.render_scale[0];
    temp_24 = temp_22 / temp_23;
    // 0x0000E8: 0x4C98079C0207001F Mov
    // 0x0000F0: 0x0103F8000007F003 Mov32i
    // 0x0000F8: 0x32A201C000070616 Ffma
    temp_25 = fma(temp_3, 2.0, -1.0);
    // 0x000108: 0x33A401C00007061A Ffma
    temp_26 = fma(temp_3, -2.0, 1.0);
    temp_27 = clamp(temp_26, 0.0, 1.0);
    // 0x000110: 0x32A601C00007061E Ffma
    temp_28 = fma(temp_3, 2.0, -1.0);
    temp_29 = clamp(temp_28, 0.0, 1.0);
    // 0x000118: 0xE043FF8B8007FF06 Ipa
    temp_30 = in_attr3.z;
    // 0x000128: 0x5C5970000FF71619 Fadd
    temp_31 = abs(temp_25);
    temp_32 = 0.0 - temp_31;
    temp_33 = temp_32 + -0.0;
    // 0x000130: 0x5C68100000A70A0B Fmul
    temp_34 = temp_13 * temp_13;
    // 0x000138: 0x51A00B9403071917 Ffma
    temp_35 = fma(temp_33, fp_c5.data[12].x, fp_c5.data[12].x);
    // 0x000148: 0x51A00C1403171918 Ffma
    temp_36 = fma(temp_33, fp_c5.data[12].y, fp_c5.data[12].y);
    // 0x000150: 0x5C68100001171102 Fmul
    temp_37 = temp_16 * temp_16;
    // 0x000158: 0x5C68100000470414 Fmul
    temp_38 = temp_17 * temp_17;
    // 0x000168: 0x59A0058000C70C0B Ffma
    temp_39 = fma(temp_14, temp_14, temp_34);
    // 0x000170: 0x49A00C1403571A18 Ffma
    temp_40 = fma(temp_27, fp_c5.data[13].y, temp_36);
    // 0x000178: 0x59A0010000F70F02 Ffma
    temp_41 = fma(temp_18, temp_18, temp_37);
    // 0x000188: 0x59A00A0000570515 Ffma
    temp_42 = fma(temp_19, temp_19, temp_38);
    // 0x000190: 0x4C68100C04A71B1B Fmul
    temp_43 = temp_24 * fp_c3.data[18].z;
    // 0x000198: 0x59A0058000E70E0B Ffma
    temp_44 = fma(temp_15, temp_15, temp_39);
    // 0x0001A8: 0x5080000000570B0B Mufu
    temp_45 = inversesqrt(temp_44);
    // 0x0001B0: 0x59A0010000D70D14 Ffma
    temp_46 = fma(temp_20, temp_20, temp_41);
    // 0x0001B8: 0xE043FF8B0007FF02 Ipa
    temp_47 = in_attr3.x;
    // 0x0001C8: 0x59A00A8001071015 Ffma
    temp_48 = fma(temp_21, temp_21, temp_42);
    // 0x0001D0: 0x5080000000571414 Mufu
    temp_49 = inversesqrt(temp_46);
    // 0x0001D8: 0x5C68100000B70A0A Fmul
    temp_50 = temp_13 * temp_45;
    // 0x0001E8: 0x5080000000571516 Mufu
    temp_51 = inversesqrt(temp_48);
    // 0x0001F0: 0x5C68100000B70C0C Fmul
    temp_52 = temp_14 * temp_45;
    // 0x0001F8: 0x5C68100000B70E0E Fmul
    temp_53 = temp_15 * temp_45;
    // 0x000208: 0x4C9807940327000B Mov
    // 0x000210: 0x5C68100001471111 Fmul
    temp_54 = temp_16 * temp_49;
    // 0x000218: 0x5C68100001470F0F Fmul
    temp_55 = temp_18 * temp_49;
    // 0x000228: 0x5C68100001470D0D Fmul
    temp_56 = temp_20 * temp_49;
    // 0x000230: 0x49A00B9403471A15 Ffma
    temp_57 = fma(temp_27, fp_c5.data[13].x, temp_35);
    // 0x000238: 0x51A0059403271919 Ffma
    temp_58 = fma(temp_33, fp_c5.data[12].z, fp_c5.data[12].z);
    // 0x000248: 0xE043FF8B4007FF0B Ipa
    temp_59 = in_attr3.y;
    // 0x000250: 0x5C68100001670514 Fmul
    temp_60 = temp_19 * temp_51;
    // 0x000258: 0x49A00A9402C71E05 Ffma
    temp_61 = fma(temp_29, fp_c5.data[11].x, temp_57);
    // 0x000268: 0x5C68100001670417 Fmul
    temp_62 = temp_17 * temp_51;
    // 0x000270: 0x49A00C1402D71E04 Ffma
    temp_63 = fma(temp_29, fp_c5.data[11].y, temp_40);
    // 0x000278: 0x5C68100001671010 Fmul
    temp_64 = temp_21 * temp_51;
    // 0x000288: 0x5C68100000270218 Fmul
    temp_65 = temp_47 * temp_47;
    // 0x000290: 0x49A00C9403671A03 Ffma
    temp_66 = fma(temp_27, fp_c5.data[13].z, temp_58);
    // 0x000298: 0xE003FF874FF7FF1A Ipa
    temp_67 = gl_FragCoord.y;
    temp_68 = support_buffer.render_scale[0];
    temp_69 = temp_67 / temp_68;
    // 0x0002A8: 0x49A0019402E71E03 Ffma
    temp_70 = fma(temp_29, fp_c5.data[11].z, temp_66);
    // 0x0002B0: 0x59A00C0000B70B18 Ffma
    temp_71 = fma(temp_59, temp_59, temp_65);
    // 0x0002B8: 0x59A00C0000670618 Ffma
    temp_72 = fma(temp_30, temp_30, temp_71);
    // 0x0002C8: 0x5080000000571818 Mufu
    temp_73 = inversesqrt(temp_72);
    // 0x0002D0: 0x4C68100C04B71A1A Fmul
    temp_74 = temp_69 * fp_c3.data[18].w;
    // 0x0002D8: 0x5C68100000970915 Fmul
    temp_75 = temp_8 * temp_8;
    // 0x0002E8: 0x5C68100000970A0A Fmul
    temp_76 = temp_50 * temp_8;
    // 0x0002F0: 0x5C68100000970E0E Fmul
    temp_77 = temp_53 * temp_8;
    // 0x0002F8: 0x4C6810180A071212 Fmul
    temp_78 = temp_10 * fp_c6.data[40].x;
    // 0x000308: 0x59A00A8000870815 Ffma
    temp_79 = fma(temp_7, temp_7, temp_75);
    // 0x000310: 0x59A005000117080A Ffma
    temp_80 = fma(temp_7, temp_54, temp_76);
    // 0x000318: 0x59A0070000D7080D Ffma
    temp_81 = fma(temp_7, temp_56, temp_77);
    // 0x000328: 0x386013BF80071212 Fmnmx
    temp_82 = min(temp_78, 1.0);
    // 0x000330: 0x385D103F80071516 Fadd
    temp_83 = 0.0 - temp_79;
    temp_84 = temp_83 + 1.0;
    temp_85 = clamp(temp_84, 0.0, 1.0);
    // 0x000338: 0x5C68100000970C15 Fmul
    temp_86 = temp_52 * temp_8;
    // 0x000348: 0x5080000000871616 Mufu
    temp_87 = sqrt(temp_85);
    // 0x000350: 0x5C6910000187020C Fmul
    temp_88 = 0.0 - temp_73;
    temp_89 = temp_47 * temp_88;
    // 0x000358: 0x5C69100001870609 Fmul
    temp_90 = 0.0 - temp_73;
    temp_91 = temp_30 * temp_90;
    // 0x000368: 0x4C60178400071219 Fmnmx
    temp_92 = max(temp_82, fp_c1.data[0].x);
    // 0x000370: 0x59A00A8000F7080F Ffma
    temp_93 = fma(temp_7, temp_55, temp_86);
    // 0x000378: 0x4C58301805C70C06 Fadd
    temp_94 = 0.0 - fp_c6.data[23].x;
    temp_95 = temp_89 + temp_94;
    // 0x000388: 0x51A40C8400071920 Ffma
    temp_96 = fma(temp_92, temp_92, fp_c1.data[0].x);
    temp_97 = clamp(temp_96, 0.0, 1.0);
    // 0x000390: 0x3859103F80071921 Fadd
    temp_98 = 0.0 - temp_92;
    temp_99 = temp_98 + 1.0;
    // 0x000398: 0x38681040E0071925 Fmul
    temp_100 = temp_92 * 7.0;
    // 0x0003A8: 0x59A0050001671717 Ffma
    temp_101 = fma(temp_62, temp_87, temp_80);
    // 0x0003B0: 0x59A007800167140F Ffma
    temp_102 = fma(temp_60, temp_87, temp_93);
    // 0x0003B8: 0x59A006800167100D Ffma
    temp_103 = fma(temp_64, temp_87, temp_81);
    // 0x0003C8: 0x5C69100001870B0A Fmul
    temp_104 = 0.0 - temp_73;
    temp_105 = temp_59 * temp_104;
    // 0x0003D0: 0x4C58301805E70910 Fadd
    temp_106 = 0.0 - fp_c6.data[23].z;
    temp_107 = temp_91 + temp_106;
    // 0x0003D8: 0x5C68100002172121 Fmul
    temp_108 = temp_99 * temp_99;
    // 0x0003E8: 0x5C68100001771708 Fmul
    temp_109 = temp_101 * temp_101;
    // 0x0003F0: 0x4C58301805D70A0E Fadd
    temp_110 = 0.0 - fp_c6.data[23].y;
    temp_111 = temp_105 + temp_110;
    // 0x0003F8: 0x59A0040000F70F08 Ffma
    temp_112 = fma(temp_102, temp_102, temp_109);
    // 0x000408: 0x59A0040000D70D02 Ffma
    temp_113 = fma(temp_103, temp_103, temp_112);
    // 0x000410: 0x5C68100000670608 Fmul
    temp_114 = temp_95 * temp_95;
    // 0x000418: 0x5080000000570202 Mufu
    temp_115 = inversesqrt(temp_113);
    // 0x000428: 0x59A0040000E70E11 Ffma
    temp_116 = fma(temp_111, temp_111, temp_114);
    // 0x000430: 0x59A0088001071011 Ffma
    temp_117 = fma(temp_107, temp_107, temp_116);
    // 0x000438: 0x5C6810000027170B Fmul
    temp_118 = temp_101 * temp_115;
    // 0x000448: 0x5080000000571111 Mufu
    temp_119 = inversesqrt(temp_117);
    // 0x000450: 0x5C68100000270F08 Fmul
    temp_120 = temp_102 * temp_115;
    // 0x000458: 0x5C68100000270D18 Fmul
    temp_121 = temp_103 * temp_115;
    // 0x000468: 0x5C68100000C70B0F Fmul
    temp_122 = temp_118 * temp_89;
    // 0x000470: 0x59A0078000A70802 Ffma
    temp_123 = fma(temp_120, temp_105, temp_122);
    // 0x000478: 0x5C68100001170615 Fmul
    temp_124 = temp_95 * temp_119;
    // 0x000488: 0x5C68100001170E17 Fmul
    temp_125 = temp_111 * temp_119;
    // 0x000490: 0x5C6810000117100E Fmul
    temp_126 = temp_107 * temp_119;
    // 0x000498: 0x4C69101805C70B11 Fmul
    temp_127 = 0.0 - fp_c6.data[23].x;
    temp_128 = temp_118 * temp_127;
    // 0x0004A8: 0x59A4010000971802 Ffma
    temp_129 = fma(temp_121, temp_91, temp_123);
    temp_130 = clamp(temp_129, 0.0, 1.0);
    // 0x0004B0: 0x5C68100001570C10 Fmul
    temp_131 = temp_89 * temp_124;
    // 0x0004B8: 0x49A1089805D70811 Ffma
    temp_132 = 0.0 - fp_c6.data[23].y;
    temp_133 = fma(temp_120, temp_132, temp_128);
    // 0x0004C8: 0x5C6810000027080D Fmul
    temp_134 = temp_120 * temp_130;
    // 0x0004D0: 0x59A0080001770A10 Ffma
    temp_135 = fma(temp_105, temp_125, temp_131);
    // 0x0004D8: 0x5C68100000270B06 Fmul
    temp_136 = temp_118 * temp_130;
    // 0x0004E8: 0x5C6810000027180F Fmul
    temp_137 = temp_121 * temp_130;
    // 0x0004F0: 0x49A5089805E7181C Ffma
    temp_138 = 0.0 - fp_c6.data[23].z;
    temp_139 = fma(temp_121, temp_138, temp_133);
    temp_140 = clamp(temp_139, 0.0, 1.0);
    // 0x0004F8: 0xE043FF904007FF11 Ipa
    temp_141 = in_attr8.y;
    // 0x000508: 0x32A2054000070D0A Ffma
    temp_142 = 0.0 - temp_105;
    temp_143 = fma(temp_134, 2.0, temp_142);
    // 0x000510: 0x4C69101805C7150D Fmul
    temp_144 = 0.0 - fp_c6.data[23].x;
    temp_145 = temp_124 * temp_144;
    // 0x000518: 0x32A206400007060C Ffma
    temp_146 = 0.0 - temp_89;
    temp_147 = fma(temp_136, 2.0, temp_146);
    // 0x000528: 0x59A4080000E70906 Ffma
    temp_148 = fma(temp_91, temp_126, temp_135);
    temp_149 = clamp(temp_148, 0.0, 1.0);
    // 0x000530: 0x32A204C000070F0F Ffma
    temp_150 = 0.0 - temp_91;
    temp_151 = fma(temp_137, 2.0, temp_150);
    // 0x000538: 0x5C68100001570B15 Fmul
    temp_152 = temp_118 * temp_124;
    // 0x000548: 0x49A1069805D7170D Ffma
    temp_153 = 0.0 - fp_c6.data[23].y;
    temp_154 = fma(temp_125, temp_153, temp_145);
    // 0x000550: 0x5C62578000A70C09 Fmnmx
    temp_155 = abs(temp_147);
    temp_156 = abs(temp_143);
    temp_157 = max(temp_155, temp_156);
    // 0x000558: 0x59A00A8001770815 Ffma
    temp_158 = fma(temp_120, temp_125, temp_152);
    // 0x000568: 0x0103F0000007F017 Mov32i
    // 0x000570: 0x49A5069805E70E22 Ffma
    temp_159 = 0.0 - fp_c6.data[23].z;
    temp_160 = fma(temp_126, temp_159, temp_154);
    temp_161 = clamp(temp_160, 0.0, 1.0);
    // 0x000578: 0x5C62578000870B0D Fmnmx
    temp_162 = abs(temp_118);
    temp_163 = abs(temp_120);
    temp_164 = max(temp_162, temp_163);
    // 0x000588: 0x5C60578000970F09 Fmnmx
    temp_165 = abs(temp_151);
    temp_166 = max(temp_165, temp_157);
    // 0x000590: 0x59A40A8000E71815 Ffma
    temp_167 = fma(temp_121, temp_126, temp_158);
    temp_168 = clamp(temp_167, 0.0, 1.0);
    // 0x000598: 0x5080000000470909 Mufu
    temp_169 = 1.0 / temp_166;
    // 0x0005A8: 0x5C6810000207200E Fmul
    temp_170 = temp_97 * temp_97;
    // 0x0005B0: 0x5C60578000D71810 Fmnmx
    temp_171 = abs(temp_121);
    temp_172 = max(temp_171, temp_164);
    // 0x0005B8: 0x32A00BBF0007191D Ffma
    temp_173 = fma(temp_92, 0.5, 0.5);
    // 0x0005C8: 0x5080000000471012 Mufu
    temp_174 = 1.0 / temp_172;
    // 0x0005D0: 0x3868104080071919 Fmul
    temp_175 = temp_92 * 4.0;
    // 0x0005D8: 0xE043FF900007FF10 Ipa
    temp_176 = in_attr8.x;
    // 0x0005E8: 0x59A20A8000E7151E Ffma
    temp_177 = 0.0 - temp_168;
    temp_178 = fma(temp_168, temp_170, temp_177);
    // 0x0005F0: 0x5C68100000970A0E Fmul
    temp_179 = temp_143 * temp_169;
    // 0x0005F8: 0x5C68100000970C0D Fmul
    temp_180 = temp_147 * temp_169;
    // 0x000608: 0x5C69100000970F0F Fmul
    temp_181 = 0.0 - temp_169;
    temp_182 = temp_151 * temp_181;
    // 0x000610: 0x5C68100001270B0A Fmul
    temp_183 = temp_118 * temp_174;
    // 0x000618: 0x5C6810000127080B Fmul
    temp_184 = temp_120 * temp_174;
    // 0x000628: 0x010000000017F00C Mov32i
    // 0x000630: 0x51A00F0400A7151E Ffma
    temp_185 = fma(temp_168, temp_178, fp_c1.data[2].z);
    // 0x000638: 0x5C69100001271818 Fmul
    temp_186 = 0.0 - temp_174;
    temp_187 = temp_121 * temp_186;
    // 0x000648: 0xC1BA0143F2570C0C Tex
    temp_188 = textureLod(fp_t_tcb_14, vec4(temp_180, temp_179, temp_182, float(1)), temp_100).xyz;
    temp_189 = temp_188.x;
    temp_190 = temp_188.y;
    temp_191 = temp_188.z;
    // 0x000650: 0x010410676C97F009 Mov32i
    // 0x000658: 0xE043FF908007FF12 Ipa
    temp_192 = in_attr8.z;
    // 0x000668: 0x5C98078000A70014 Mov
    // 0x000670: 0x5080000000471E1E Mufu
    temp_193 = 1.0 / temp_185;
    // 0x000678: 0x5C98078000B70015 Mov
    // 0x000688: 0xD9A2018191870A0A Texs
    temp_194 = textureLod(fp_t_tcb_18, vec3(temp_183, temp_184, temp_187), temp_175).xyz;
    temp_195 = temp_194.x;
    temp_196 = temp_194.y;
    temp_197 = temp_194.z;
    // 0x000690: 0x5C68120001D71D1D Fmul
    temp_198 = temp_173 * 0.5;
    temp_199 = temp_198 * temp_173;
    // 0x000698: 0x5C98078001870016 Mov
    // 0x0006A8: 0xC0BA0163EFF71414 Tex
    temp_200 = textureLod(fp_t_tcb_16, vec3(temp_183, temp_184, temp_187), 0.0).xyz;
    temp_201 = temp_200.x;
    temp_202 = temp_200.y;
    temp_203 = temp_200.z;
    // 0x0006B0: 0xD822020231A71B1A Texs
    temp_204 = texture(fp_t_tcb_20, vec2(temp_43, temp_74)).xyz;
    temp_205 = temp_204.x;
    temp_206 = temp_204.y;
    temp_207 = temp_204.z;
    // 0x0006B8: 0xDEBA0000C1F71010 TexB
    temp_208 = texture(fp_t_cb7_20, vec3(temp_176, temp_141, temp_192)).x;
    // 0x0006C8: 0x01040DF760C7F00F Mov32i
    // 0x0006D0: 0x5C68100002172121 Fmul
    temp_209 = temp_108 * temp_108;
    // 0x0006D8: 0x0103E2CD9E87F027 Mov32i
    // 0x0006E8: 0x49A0048400570209 Ffma
    temp_210 = fma(temp_130, fp_c1.data[1].y, 8.40400028);
    // 0x0006F0: 0x5C68100001E72020 Fmul
    temp_211 = temp_97 * temp_193;
    // 0x0006F8: 0x59A1010001D70224 Ffma
    temp_212 = 0.0 - temp_199;
    temp_213 = fma(temp_130, temp_212, temp_130);
    // 0x000708: 0x59A10E0001C71D26 Ffma
    temp_214 = 0.0 - temp_140;
    temp_215 = fma(temp_199, temp_214, temp_140);
    // 0x000710: 0x385D103F80070101 Fadd
    temp_216 = 0.0 - temp_12;
    temp_217 = temp_216 + 1.0;
    temp_218 = clamp(temp_217, 0.0, 1.0);
    // 0x000718: 0x49A213840077211E Ffma
    temp_219 = fma(temp_209, fp_c1.data[1].w, -0.168799996);
    // 0x000728: 0x1E23E468DB970212 Fmul32i
    temp_220 = temp_130 * 0.193900004;
    // 0x000730: 0x49A2078400172211 Ffma
    temp_221 = fma(temp_161, fp_c1.data[0].y, -6.98316002);
    // 0x000738: 0x3859103F8007020F Fadd
    temp_222 = 0.0 - temp_130;
    temp_223 = temp_222 + 1.0;
    // 0x000748: 0x51A0048400670218 Ffma
    temp_224 = fma(temp_130, temp_210, fp_c1.data[1].z);
    // 0x000750: 0x5C68100001E72109 Fmul
    temp_225 = temp_209 * temp_219;
    // 0x000758: 0x5C58100002471D24 Fadd
    temp_226 = temp_199 + temp_213;
    // 0x000768: 0x49A0090400272112 Ffma
    temp_227 = fma(temp_209, fp_c1.data[0].z, temp_220);
    // 0x000770: 0x5080000000472424 Mufu
    temp_228 = 1.0 / temp_226;
    // 0x000778: 0x4C68101809070F0F Fmul
    temp_229 = temp_223 * fp_c6.data[36].x;
    // 0x000788: 0x5C68100001172222 Fmul
    temp_230 = temp_161 * temp_221;
    // 0x000790: 0x5080400000370F0F Mufu
    temp_231 = abs(temp_229);
    temp_232 = log2(temp_231);
    // 0x000798: 0x51A00C0400870218 Ffma
    temp_233 = fma(temp_130, temp_224, fp_c1.data[2].x);
    // 0x0007A8: 0x5C58100002671D1D Fadd
    temp_234 = temp_199 + temp_215;
    // 0x0007B0: 0x088BF05D63971211 Fadd32i
    temp_235 = temp_227 + -0.522800028;
    // 0x0007B8: 0x5080000000471D1D Mufu
    temp_236 = 1.0 / temp_234;
    // 0x0007C8: 0x0104066978D7F012 Mov32i
    // 0x0007D0: 0x5C9000800227001E Rro
    // 0x0007D8: 0x5C68100002072020 Fmul
    temp_237 = temp_211 * temp_211;
    // 0x0007E8: 0x5080000000271E1E Mufu
    temp_238 = exp2(temp_230);
    // 0x0007F0: 0x5C60138000971809 Fmnmx
    temp_239 = min(temp_233, temp_225);
    // 0x0007F8: 0x5C68100001170202 Fmul
    temp_240 = temp_130 * temp_235;
    // 0x000808: 0x49A2090400372112 Ffma
    temp_241 = fma(temp_209, fp_c1.data[0].w, -3.60299993);
    // 0x000810: 0x4C58301407B70511 Fadd
    temp_242 = 0.0 - fp_c5.data[30].w;
    temp_243 = temp_61 + temp_242;
    // 0x000818: 0x4C68101809170F18 Fmul
    temp_244 = temp_232 * fp_c6.data[36].y;
    // 0x000828: 0x4C98079809A7001F Mov
    // 0x000830: 0x5C5C30000FF70909 Fadd
    temp_245 = temp_239 + -0.0;
    temp_246 = clamp(temp_245, 0.0, 1.0);
    // 0x000838: 0x51A009040047210F Ffma
    temp_247 = fma(temp_209, temp_241, fp_c1.data[1].x);
    // 0x000848: 0x51A0089407B71311 Ffma
    temp_248 = fma(temp_11, temp_243, fp_c5.data[30].w);
    // 0x000850: 0x5C68120001D72412 Fmul
    temp_249 = temp_228 * 0.5;
    temp_250 = temp_249 * temp_236;
    // 0x000858: 0x5C90008001870022 Rro
    // 0x000868: 0x4C58301407B70324 Fadd
    temp_251 = 0.0 - fp_c5.data[30].w;
    temp_252 = temp_70 + temp_251;
    // 0x000870: 0x5084000000272218 Mufu
    temp_253 = exp2(temp_244);
    temp_254 = clamp(temp_253, 0.0, 1.0);
    // 0x000878: 0x59A0010000F72121 Ffma
    temp_255 = fma(temp_209, temp_247, temp_240);
    // 0x000888: 0x59A10F0001E7110F Ffma
    temp_256 = 0.0 - temp_238;
    temp_257 = fma(temp_248, temp_256, temp_238);
    // 0x000890: 0x4C58301407B70402 Fadd
    temp_258 = 0.0 - fp_c5.data[30].w;
    temp_259 = temp_63 + temp_258;
    // 0x000898: 0x5C68100001272012 Fmul
    temp_260 = temp_237 * temp_250;
    // 0x0008A8: 0x4C58101408171F1F Fadd
    temp_261 = fp_c6.data[38].z + fp_c5.data[32].y;
    // 0x0008B0: 0x51A0121407B71324 Ffma
    temp_262 = fma(temp_11, temp_252, fp_c5.data[30].w);
    // 0x0008B8: 0x5C58100000F7110F Fadd
    temp_263 = temp_248 + temp_257;
    // 0x0008C8: 0x51A0011407B7131D Ffma
    temp_264 = fma(temp_11, temp_259, fp_c5.data[30].w);
    // 0x0008D0: 0x5C68100001871F18 Fmul
    temp_265 = temp_261 * temp_254;
    // 0x0008D8: 0x4C68101801470F20 Fmul
    temp_266 = temp_263 * fp_c6.data[5].x;
    // 0x0008E8: 0x386C104248071D02 Fmul
    temp_267 = temp_264 * 50.0;
    temp_268 = clamp(temp_267, 0.0, 1.0);
    // 0x0008F0: 0x4C5C10040097210F Fadd
    temp_269 = temp_255 + fp_c1.data[2].y;
    temp_270 = clamp(temp_269, 0.0, 1.0);
    // 0x0008F8: 0x5C68100001271C21 Fmul
    temp_271 = temp_140 * temp_260;
    // 0x000908: 0x4C68101808C7181F Fmul
    temp_272 = temp_265 * fp_c6.data[35].x;
    // 0x000910: 0x5C68100000970202 Fmul
    temp_273 = temp_268 * temp_246;
    // 0x000918: 0x5C59100000F70927 Fadd
    temp_274 = 0.0 - temp_246;
    temp_275 = temp_274 + temp_270;
    // 0x000928: 0x5C68100002072109 Fmul
    temp_276 = temp_271 * temp_266;
    // 0x000930: 0x59A10F0001E71D20 Ffma
    temp_277 = 0.0 - temp_238;
    temp_278 = fma(temp_264, temp_277, temp_238);
    // 0x000938: 0x59A10F0001E7241E Ffma
    temp_279 = 0.0 - temp_238;
    temp_280 = fma(temp_262, temp_279, temp_238);
    // 0x000948: 0x4C68101408271F0F Fmul
    temp_281 = temp_272 * fp_c5.data[32].z;
    // 0x000950: 0x59A0010002771112 Ffma
    temp_282 = fma(temp_248, temp_275, temp_273);
    // 0x000958: 0x5C58100002071D20 Fadd
    temp_283 = temp_264 + temp_278;
    // 0x000968: 0x5C58100001E7241E Fadd
    temp_284 = temp_262 + temp_280;
    // 0x000970: 0x49A0078400B70909 Ffma
    temp_285 = fma(temp_276, fp_c1.data[2].w, temp_281);
    // 0x000978: 0x59A0010002771D0F Ffma
    temp_286 = fma(temp_264, temp_275, temp_273);
    // 0x000988: 0x59A0010002772402 Ffma
    temp_287 = fma(temp_262, temp_275, temp_273);
    // 0x000990: 0x4C68101801572020 Fmul
    temp_288 = temp_283 * fp_c6.data[5].y;
    // 0x000998: 0x4C68101801671E1E Fmul
    temp_289 = temp_284 * fp_c6.data[5].z;
    // 0x0009A8: 0x5C68100002072122 Fmul
    temp_290 = temp_271 * temp_288;
    // 0x0009B0: 0x4C68101808D71820 Fmul
    temp_291 = temp_265 * fp_c6.data[35].y;
    // 0x0009B8: 0x5C68100001E72121 Fmul
    temp_292 = temp_271 * temp_289;
    // 0x0009C8: 0x4C68101808E71818 Fmul
    temp_293 = temp_265 * fp_c6.data[35].z;
    // 0x0009D0: 0x4C68101408272025 Fmul
    temp_294 = temp_291 * fp_c5.data[32].z;
    // 0x0009D8: 0x49A1101408272020 Ffma
    temp_295 = 0.0 - fp_c5.data[32].z;
    temp_296 = fma(temp_291, temp_295, temp_291);
    // 0x0009E8: 0x49A0128400B7221E Ffma
    temp_297 = fma(temp_290, fp_c1.data[2].w, temp_294);
    // 0x0009F0: 0x01040DF760C7F025 Mov32i
    // 0x0009F8: 0x49A2128400170625 Ffma
    temp_298 = fma(temp_149, fp_c1.data[0].y, -6.98316002);
    // 0x000A08: 0x5C68100002570625 Fmul
    temp_299 = temp_149 * temp_298;
    // 0x000A10: 0x5C90008002570025 Rro
    // 0x000A18: 0x5080000000272522 Mufu
    temp_300 = exp2(temp_299);
    // 0x000A28: 0x59A1110002271106 Ffma
    temp_301 = 0.0 - temp_300;
    temp_302 = fma(temp_248, temp_301, temp_300);
    // 0x000A30: 0x5C58100000671111 Fadd
    temp_303 = temp_248 + temp_302;
    // 0x000A38: 0x59A1110002271D06 Ffma
    temp_304 = 0.0 - temp_300;
    temp_305 = fma(temp_264, temp_304, temp_300);
    // 0x000A48: 0x59A1110002272422 Ffma
    temp_306 = 0.0 - temp_300;
    temp_307 = fma(temp_262, temp_306, temp_300);
    // 0x000A50: 0x5C58100000671D06 Fadd
    temp_308 = temp_264 + temp_305;
    // 0x000A58: 0x4C68101801471C1D Fmul
    temp_309 = temp_140 * fp_c6.data[5].x;
    // 0x000A68: 0x5C58100002272424 Fadd
    temp_310 = temp_262 + temp_307;
    // 0x000A70: 0x1E23EA2F98371D22 Fmul32i
    temp_311 = temp_309 * 0.318309873;
    // 0x000A78: 0x4C68101801571C1D Fmul
    temp_312 = temp_140 * fp_c6.data[5].y;
    // 0x000A88: 0x4C68101801671C1C Fmul
    temp_313 = temp_140 * fp_c6.data[5].z;
    // 0x000A90: 0x59A1110001172211 Ffma
    temp_314 = 0.0 - temp_303;
    temp_315 = fma(temp_311, temp_314, temp_311);
    // 0x000A98: 0x1E23EA2F98371D1D Fmul32i
    temp_316 = temp_312 * 0.318309873;
    // 0x000AA8: 0x49A10F9408271F22 Ffma
    temp_317 = 0.0 - fp_c5.data[32].z;
    temp_318 = fma(temp_272, temp_317, temp_272);
    // 0x000AB0: 0x4C6810140827181F Fmul
    temp_319 = temp_293 * fp_c5.data[32].z;
    // 0x000AB8: 0x59A10E8000671D06 Ffma
    temp_320 = 0.0 - temp_308;
    temp_321 = fma(temp_316, temp_320, temp_316);
    // 0x000AC8: 0x1E23EA2F98371C1D Fmul32i
    temp_322 = temp_313 * 0.318309873;
    // 0x000AD0: 0x32A00BBF0007081C Ffma
    temp_323 = fma(temp_120, 0.5, 0.5);
    // 0x000AD8: 0x5C58100001172208 Fadd
    temp_324 = temp_318 + temp_315;
    // 0x000AE8: 0x4C98079800570017 Mov
    // 0x000AF0: 0x4C98079800670011 Mov
    // 0x000AF8: 0x49A00F8400B72121 Ffma
    temp_325 = fma(temp_292, fp_c1.data[2].w, temp_319);
    // 0x000B08: 0x59A10E8002471D24 Ffma
    temp_326 = 0.0 - temp_310;
    temp_327 = fma(temp_322, temp_326, temp_322);
    // 0x000B10: 0x4C9807980047001D Mov
    // 0x000B18: 0x49A10C140827181F Ffma
    temp_328 = 0.0 - fp_c5.data[32].z;
    temp_329 = fma(temp_293, temp_328, temp_293);
    // 0x000B28: 0x4C58301800971717 Fadd
    temp_330 = 0.0 - fp_c6.data[2].y;
    temp_331 = fp_c6.data[1].y + temp_330;
    // 0x000B30: 0x4C58301800A71111 Fadd
    temp_332 = 0.0 - fp_c6.data[2].z;
    temp_333 = fp_c6.data[1].z + temp_332;
    // 0x000B38: 0x5C58100000672006 Fadd
    temp_334 = temp_296 + temp_321;
    // 0x000B48: 0x4C58301800871D1D Fadd
    temp_335 = 0.0 - fp_c6.data[2].x;
    temp_336 = fp_c6.data[1].x + temp_335;
    // 0x000B50: 0x5C58100002471F24 Fadd
    temp_337 = temp_329 + temp_327;
    // 0x000B58: 0x51A00E1800971717 Ffma
    temp_338 = fma(temp_331, temp_323, fp_c6.data[2].y);
    // 0x000B68: 0x51A00E1800A71111 Ffma
    temp_339 = fma(temp_333, temp_323, fp_c6.data[2].z);
    // 0x000B70: 0x010404000007F01F Mov32i
    // 0x000B78: 0x51A00E1800871D1D Ffma
    temp_340 = fma(temp_336, temp_323, fp_c6.data[2].x);
    // 0x000B88: 0xE04BFF8F4007FF1C Ipa
    temp_341 = in_attr7.y;
    temp_342 = clamp(temp_341, 0.0, 1.0);
    // 0x000B90: 0x33A00FC000071C18 Ffma
    temp_343 = fma(temp_342, -2.0, 3.0);
    // 0x000B98: 0x5C68100001C71C1F Fmul
    temp_344 = temp_342 * temp_342;
    // 0x000BA8: 0xF0F0000034270000 Depbar
    // 0x000BB0: 0x49A0051808570C0C Ffma
    temp_345 = fma(temp_189, fp_c6.data[33].y, temp_195);
    // 0x000BB8: 0x49A0059808570D0D Ffma
    temp_346 = fma(temp_190, fp_c6.data[33].y, temp_196);
    // 0x000BC8: 0x49A00C9808570E0B Ffma
    temp_347 = fma(temp_191, fp_c6.data[33].y, temp_197);
    // 0x000BD0: 0x5C68100001F7180A Fmul
    temp_348 = temp_343 * temp_344;
    // 0x000BD8: 0x49A00A0400C71D1D Ffma
    temp_349 = fma(temp_340, fp_c1.data[3].x, temp_201);
    // 0x000BE8: 0x59A0048000C71212 Ffma
    temp_350 = fma(temp_282, temp_345, temp_285);
    // 0x000BF0: 0xE043FF8F0007FF09 Ipa
    temp_351 = in_attr7.x;
    // 0x000BF8: 0x49A00A8400C71715 Ffma
    temp_352 = fma(temp_338, fp_c1.data[3].x, temp_202);
    // 0x000C08: 0x59A0108000B70202 Ffma
    temp_353 = fma(temp_287, temp_347, temp_325);
    // 0x000C10: 0x49A200980AC7010B Ffma
    temp_354 = 0.0 - temp_218;
    temp_355 = fma(temp_218, fp_c6.data[43].x, temp_354);
    // 0x000C18: 0x49A200980AD7010C Ffma
    temp_356 = 0.0 - temp_218;
    temp_357 = fma(temp_218, fp_c6.data[43].y, temp_356);
    // 0x000C28: 0x5C58100001D70808 Fadd
    temp_358 = temp_324 + temp_349;
    // 0x000C30: 0x49A00B0400C71111 Ffma
    temp_359 = fma(temp_339, fp_c1.data[3].x, temp_203);
    // 0x000C38: 0x59A00F0000D70F0F Ffma
    temp_360 = fma(temp_286, temp_346, temp_297);
    // 0x000C48: 0x5C58100001570606 Fadd
    temp_361 = temp_334 + temp_352;
    // 0x000C50: 0x49A200980AE70101 Ffma
    temp_362 = 0.0 - temp_218;
    temp_363 = fma(temp_218, fp_c6.data[43].z, temp_362);
    // 0x000C58: 0x3858103F80070B0B Fadd
    temp_364 = temp_355 + 1.0;
    // 0x000C68: 0x3858103F80070C0D Fadd
    temp_365 = temp_357 + 1.0;
    // 0x000C70: 0x59A1040000871308 Ffma
    temp_366 = 0.0 - temp_358;
    temp_367 = fma(temp_11, temp_366, temp_358);
    // 0x000C78: 0x5C58100001172411 Fadd
    temp_368 = temp_337 + temp_359;
    // 0x000C88: 0x4C9807980B47000C Mov
    // 0x000C90: 0x59A1030000671306 Ffma
    temp_369 = 0.0 - temp_361;
    temp_370 = fma(temp_11, temp_369, temp_361);
    // 0x000C98: 0x3858103F80070101 Fadd
    temp_371 = temp_363 + 1.0;
    // 0x000CA8: 0x59A4058000B7050B Ffma
    temp_372 = fma(temp_61, temp_364, temp_364);
    temp_373 = clamp(temp_372, 0.0, 1.0);
    // 0x000CB0: 0x59A0090000870508 Ffma
    temp_374 = fma(temp_61, temp_367, temp_350);
    // 0x000CB8: 0x59A1088001171311 Ffma
    temp_375 = 0.0 - temp_368;
    temp_376 = fma(temp_11, temp_375, temp_368);
    // 0x000CC8: 0x4C98079802870005 Mov
    // 0x000CD0: 0x51A206180B471A1A Ffma
    temp_377 = 0.0 - fp_c6.data[45].x;
    temp_378 = fma(temp_205, fp_c6.data[45].x, temp_377);
    // 0x000CD8: 0x59A4068000D7040D Ffma
    temp_379 = fma(temp_63, temp_365, temp_365);
    temp_380 = clamp(temp_379, 0.0, 1.0);
    // 0x000CE8: 0x59A0078000670406 Ffma
    temp_381 = fma(temp_63, temp_370, temp_360);
    // 0x000CF0: 0x59A4008000170304 Ffma
    temp_382 = fma(temp_70, temp_371, temp_371);
    temp_383 = clamp(temp_382, 0.0, 1.0);
    // 0x000CF8: 0x59A0010001170303 Ffma
    temp_384 = fma(temp_70, temp_376, temp_353);
    // 0x000D08: 0x5C68100000870B01 Fmul
    temp_385 = temp_373 * temp_374;
    // 0x000D10: 0x51A206180B471B1B Ffma
    temp_386 = 0.0 - fp_c6.data[45].x;
    temp_387 = fma(temp_206, fp_c6.data[45].x, temp_386);
    // 0x000D18: 0x51A206180B472323 Ffma
    temp_388 = 0.0 - fp_c6.data[45].x;
    temp_389 = fma(temp_207, fp_c6.data[45].x, temp_388);
    // 0x000D28: 0x51A0029802871A1A Ffma
    temp_390 = fma(temp_378, fp_c6.data[10].x, fp_c6.data[10].x);
    // 0x000D30: 0x49A504980BC71009 Ffma
    temp_391 = 0.0 - fp_c6.data[47].x;
    temp_392 = fma(temp_208, temp_391, temp_351);
    temp_393 = clamp(temp_392, 0.0, 1.0);
    // 0x000D38: 0x4C98079802970008 Mov
    // 0x000D48: 0x5080000000370909 Mufu
    temp_394 = log2(temp_393);
    // 0x000D50: 0x4C98079802A7000C Mov
    // 0x000D58: 0x5C68100000370403 Fmul
    temp_395 = temp_383 * temp_384;
    // 0x000D68: 0x5C58300001A70105 Fadd
    temp_396 = 0.0 - temp_390;
    temp_397 = temp_385 + temp_396;
    // 0x000D70: 0x5C68100000670D02 Fmul
    temp_398 = temp_380 * temp_381;
    // 0x000D78: 0x4C68101803770A0A Fmul
    temp_399 = temp_348 * fp_c6.data[13].w;
    // 0x000D88: 0x51A0041802971B1B Ffma
    temp_400 = fma(temp_387, fp_c6.data[10].y, fp_c6.data[10].y);
    // 0x000D90: 0x51A0061802A72304 Ffma
    temp_401 = fma(temp_389, fp_c6.data[10].z, fp_c6.data[10].z);
    // 0x000D98: 0xE043FF8C8007FF0C Ipa
    temp_402 = in_attr4.z;
    // 0x000DA8: 0x49A00D180BF70508 Ffma
    temp_403 = fma(temp_397, fp_c6.data[47].w, temp_390);
    // 0x000DB0: 0x5C58300001B70205 Fadd
    temp_404 = 0.0 - temp_400;
    temp_405 = temp_398 + temp_404;
    // 0x000DB8: 0x5C58300000470306 Fadd
    temp_406 = 0.0 - temp_401;
    temp_407 = temp_395 + temp_406;
    // 0x000DC8: 0x4C6810180317090B Fmul
    temp_408 = temp_394 * fp_c6.data[12].y;
    // 0x000DD0: 0x5C60178000871A08 Fmnmx
    temp_409 = max(temp_390, temp_403);
    // 0x000DD8: 0x49A2051803470A09 Ffma
    temp_410 = 0.0 - temp_399;
    temp_411 = fma(temp_399, fp_c6.data[13].x, temp_410);
    // 0x000DE8: 0x49A2051803570A00 Ffma
    temp_412 = 0.0 - temp_399;
    temp_413 = fma(temp_399, fp_c6.data[13].y, temp_412);
    // 0x000DF0: 0x49A00D980BF70505 Ffma
    temp_414 = fma(temp_405, fp_c6.data[47].w, temp_400);
    // 0x000DF8: 0x49A002180BF70606 Ffma
    temp_415 = fma(temp_407, fp_c6.data[47].w, temp_401);
    // 0x000E08: 0x5C90008000B7000B Rro
    // 0x000E10: 0x59A0040000970808 Ffma
    temp_416 = fma(temp_409, temp_411, temp_409);
    // 0x000E18: 0x5080000000270B0B Mufu
    temp_417 = exp2(temp_408);
    // 0x000E28: 0x5C60178000571B05 Fmnmx
    temp_418 = max(temp_400, temp_414);
    // 0x000E30: 0x5C60178000670406 Fmnmx
    temp_419 = max(temp_401, temp_415);
    // 0x000E38: 0x49A2051803670A04 Ffma
    temp_420 = 0.0 - temp_399;
    temp_421 = fma(temp_399, fp_c6.data[13].z, temp_420);
    // 0x000E48: 0x59A0028000070505 Ffma
    temp_422 = fma(temp_418, temp_413, temp_418);
    // 0x000E50: 0x5C59100000870100 Fadd
    temp_423 = 0.0 - temp_385;
    temp_424 = temp_423 + temp_416;
    // 0x000E58: 0x59A0030000470609 Ffma
    temp_425 = fma(temp_419, temp_421, temp_419);
    // 0x000E68: 0x4C68101802B70B06 Fmul
    temp_426 = temp_417 * fp_c6.data[10].w;
    // 0x000E70: 0x5C59100000570204 Fadd
    temp_427 = 0.0 - temp_398;
    temp_428 = temp_427 + temp_422;
    // 0x000E78: 0x4C58100C03870C08 Fadd
    temp_429 = temp_402 + fp_c3.data[14].x;
    // 0x000E88: 0x5C59100000970305 Fadd
    temp_430 = 0.0 - temp_395;
    temp_431 = temp_430 + temp_425;
    // 0x000E90: 0x59A0008000670000 Ffma
    temp_432 = fma(temp_424, temp_426, temp_385);
    // 0x000E98: 0x59A0010000670401 Ffma
    temp_433 = fma(temp_428, temp_426, temp_398);
    // 0x000EA8: 0x49A37F8C03C70804 Ffma
    temp_434 = 0.0 - fp_c3.data[15].x;
    temp_435 = fma(temp_429, temp_434, -0.0);
    // 0x000EB0: 0x59A0018000670502 Ffma
    temp_436 = fma(temp_431, temp_426, temp_395);
    // 0x000EB8: 0x0103F6000007F005 Mov32i
    // 0x000EC8: 0x5C9807800FF70006 Mov
    // 0x000ED0: 0x5C98078000770003 Mov
    // 0x000ED8: 0xE30000000007000F Exit
    out_attr0.x = temp_432;
    out_attr0.y = temp_433;
    out_attr0.z = temp_436;
    out_attr0.w = temp_4;
    out_attr1.x = temp_435;
    out_attr1.y = 0.875;
    out_attr1.z = 0.0;
    out_attr1.w = temp_4;
    return;
}
