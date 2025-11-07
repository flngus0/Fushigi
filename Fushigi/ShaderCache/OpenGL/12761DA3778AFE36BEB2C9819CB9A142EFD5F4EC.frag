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

layout (binding = 7, std140) uniform _fp_c6
{
    precise vec4 data[4096];
} fp_c6;

layout (binding = 2, std140) uniform _fp_c1
{
    precise vec4 data[4096];
} fp_c1;

layout (binding = 4, std140) uniform _fp_c3
{
    precise vec4 data[4096];
} fp_c3;

layout (binding = 6, std140) uniform _fp_c5
{
    precise vec4 data[4096];
} fp_c5;

layout (binding = 0) uniform sampler2D fp_t_tcb_26;
layout (binding = 1) uniform sampler2D fp_t_tcb_36;
layout (binding = 2) uniform sampler2D fp_t_tcb_24;
layout (binding = 3) uniform samplerCube fp_t_tcb_18;
layout (binding = 4) uniform samplerCubeArray fp_t_tcb_14;
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
    precise vec3 temp_5;
    precise float temp_6;
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
    precise vec3 temp_127;
    precise float temp_128;
    precise float temp_129;
    precise float temp_130;
    precise vec3 temp_131;
    precise float temp_132;
    precise float temp_133;
    precise float temp_134;
    precise vec3 temp_135;
    precise float temp_136;
    precise float temp_137;
    precise float temp_138;
    precise vec3 temp_139;
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
    // 0x000008: 0x4C98079C0207001B Mov
    // 0x000010: 0xE003FF87CFF7FF07 Ipa
    // 0x000018: 0x5080000000470707 Mufu
    // 0x000028: 0xE043FF8D0077FF0D Ipa
    temp_0 = in_attr5.x;
    // 0x000030: 0xE043FF8D4077FF0C Ipa
    temp_1 = in_attr5.y;
    // 0x000038: 0xD830026FF0C70D00 Texs
    temp_2 = texture(fp_t_tcb_26, vec2(temp_0, temp_1)).xy;
    temp_3 = temp_2.x;
    temp_4 = temp_2.y;
    // 0x000048: 0xD824036160C70D02 Texs
    temp_5 = texture(fp_t_tcb_36, vec2(temp_0, temp_1)).xyw;
    temp_6 = temp_5.x;
    temp_7 = temp_5.y;
    temp_8 = temp_5.z;
    // 0x000050: 0xD8220241D0C70D0C Texs
    temp_9 = texture(fp_t_tcb_24, vec2(temp_0, temp_1)).xyz;
    temp_10 = temp_9.x;
    temp_11 = temp_9.y;
    temp_12 = temp_9.z;
    // 0x000058: 0xE043FF8A0077FF04 Ipa
    temp_13 = in_attr2.x;
    // 0x000068: 0xE043FF8A4077FF05 Ipa
    temp_14 = in_attr2.y;
    // 0x000070: 0xE043FF890077FF09 Ipa
    temp_15 = in_attr1.x;
    // 0x000078: 0xE043FF880077FF12 Ipa
    temp_16 = in_attr0.x;
    // 0x000088: 0xE043FF8A8077FF06 Ipa
    temp_17 = in_attr2.z;
    // 0x000090: 0xE043FF894077FF0A Ipa
    temp_18 = in_attr1.y;
    // 0x000098: 0xE043FF884077FF13 Ipa
    temp_19 = in_attr0.y;
    // 0x0000A8: 0xE043FF898077FF0E Ipa
    temp_20 = in_attr1.z;
    // 0x0000B0: 0xE043FF888077FF14 Ipa
    temp_21 = in_attr0.z;
    // 0x0000B8: 0xE043FF8B0077FF1A Ipa
    temp_22 = in_attr3.x;
    // 0x0000C8: 0xE043FF8B8077FF1C Ipa
    temp_23 = in_attr3.z;
    // 0x0000D0: 0x5C68100000470408 Fmul
    temp_24 = temp_13 * temp_13;
    // 0x0000D8: 0x5C6810000097090B Fmul
    temp_25 = temp_15 * temp_15;
    // 0x0000E8: 0x5C68100001271210 Fmul
    temp_26 = temp_16 * temp_16;
    // 0x0000F0: 0x59A0040000570508 Ffma
    temp_27 = fma(temp_14, temp_14, temp_24);
    // 0x0000F8: 0x59A0058000A70A0F Ffma
    temp_28 = fma(temp_18, temp_18, temp_25);
    // 0x000108: 0x59A0080001371311 Ffma
    temp_29 = fma(temp_19, temp_19, temp_26);
    // 0x000110: 0x59A0040000670608 Ffma
    temp_30 = fma(temp_17, temp_17, temp_27);
    // 0x000118: 0x508000000057080B Mufu
    temp_31 = inversesqrt(temp_30);
    // 0x000128: 0x59A0078000E70E0F Ffma
    temp_32 = fma(temp_20, temp_20, temp_28);
    // 0x000130: 0x59A0088001471415 Ffma
    temp_33 = fma(temp_21, temp_21, temp_29);
    // 0x000138: 0x5080000000570F0F Mufu
    temp_34 = inversesqrt(temp_32);
    // 0x000148: 0x5C68100000B70510 Fmul
    temp_35 = temp_14 * temp_31;
    // 0x000150: 0x5080000000571515 Mufu
    temp_36 = inversesqrt(temp_33);
    // 0x000158: 0x5C68100000B70404 Fmul
    temp_37 = temp_13 * temp_31;
    // 0x000168: 0x5C68100000B70606 Fmul
    temp_38 = temp_17 * temp_31;
    // 0x000170: 0x5C68100000F70E11 Fmul
    temp_39 = temp_20 * temp_34;
    // 0x000178: 0x5C68100000F7090B Fmul
    temp_40 = temp_15 * temp_34;
    // 0x000188: 0x5C68100000F70A0A Fmul
    temp_41 = temp_18 * temp_34;
    // 0x000190: 0x5C6810000157120E Fmul
    temp_42 = temp_16 * temp_36;
    // 0x000198: 0xE043FF8B4077FF12 Ipa
    temp_43 = in_attr3.y;
    // 0x0001A8: 0x5C68100001571313 Fmul
    temp_44 = temp_19 * temp_36;
    // 0x0001B0: 0x5C68100001571414 Fmul
    temp_45 = temp_21 * temp_36;
    // 0x0001B8: 0xF0F0000034170000 Depbar
    // 0x0001C8: 0x5C68100000170105 Fmul
    temp_46 = temp_4 * temp_4;
    // 0x0001D0: 0x5C68100000171009 Fmul
    temp_47 = temp_35 * temp_4;
    // 0x0001D8: 0xE003FF870FF7FF10 Ipa
    temp_48 = gl_FragCoord.x;
    temp_49 = support_buffer.render_scale[0];
    temp_50 = temp_48 / temp_49;
    // 0x0001E8: 0x5C68100000170606 Fmul
    temp_51 = temp_38 * temp_4;
    // 0x0001F0: 0x4C6810180A070202 Fmul
    temp_52 = temp_6 * fp_c6.data[40].x;
    // 0x0001F8: 0x59A0028000070005 Ffma
    temp_53 = fma(temp_3, temp_3, temp_46);
    // 0x000208: 0x59A0048000A70009 Ffma
    temp_54 = fma(temp_3, temp_41, temp_47);
    // 0x000210: 0x59A0030001170006 Ffma
    temp_55 = fma(temp_3, temp_39, temp_51);
    // 0x000218: 0xE003FF874FF7FF11 Ipa
    temp_56 = gl_FragCoord.y;
    temp_57 = support_buffer.render_scale[0];
    temp_58 = temp_56 / temp_57;
    // 0x000228: 0x386013BF80070202 Fmnmx
    temp_59 = min(temp_52, 1.0);
    // 0x000230: 0x385D103F80070508 Fadd
    temp_60 = 0.0 - temp_53;
    temp_61 = temp_60 + 1.0;
    temp_62 = clamp(temp_61, 0.0, 1.0);
    // 0x000238: 0x5C68100000170405 Fmul
    temp_63 = temp_37 * temp_4;
    // 0x000248: 0x5080000000870808 Mufu
    temp_64 = sqrt(temp_62);
    // 0x000250: 0x5C68100001A71A01 Fmul
    temp_65 = temp_22 * temp_22;
    // 0x000258: 0x4C6017840027021E Fmnmx
    temp_66 = max(temp_59, fp_c1.data[0].z);
    // 0x000268: 0xE043FF908077FF02 Ipa
    temp_67 = in_attr8.z;
    // 0x000270: 0x59A0028000B70005 Ffma
    temp_68 = fma(temp_3, temp_40, temp_63);
    // 0x000278: 0x59A0008001271201 Ffma
    temp_69 = fma(temp_43, temp_43, temp_65);
    // 0x000288: 0x3868104080071E15 Fmul
    temp_70 = temp_66 * 4.0;
    // 0x000290: 0x38681040E0071E20 Fmul
    temp_71 = temp_66 * 7.0;
    // 0x000298: 0x59A0028000870E05 Ffma
    temp_72 = fma(temp_42, temp_64, temp_68);
    // 0x0002A8: 0x59A0048000871309 Ffma
    temp_73 = fma(temp_44, temp_64, temp_54);
    // 0x0002B0: 0x59A0030000871406 Ffma
    temp_74 = fma(temp_45, temp_64, temp_55);
    // 0x0002B8: 0x59A0008001C71C01 Ffma
    temp_75 = fma(temp_23, temp_23, temp_69);
    // 0x0002C8: 0x010000000017F008 Mov32i
    // 0x0002D0: 0x5080000000570101 Mufu
    temp_76 = inversesqrt(temp_75);
    // 0x0002D8: 0x5C68100000570500 Fmul
    temp_77 = temp_72 * temp_72;
    // 0x0002E8: 0x4C68100C04A71010 Fmul
    temp_78 = temp_50 * fp_c3.data[18].z;
    // 0x0002F0: 0x4C68100C04B71111 Fmul
    temp_79 = temp_58 * fp_c3.data[18].w;
    // 0x0002F8: 0x59A0000000970900 Ffma
    temp_80 = fma(temp_73, temp_73, temp_77);
    // 0x000308: 0x59A0000000670600 Ffma
    temp_81 = fma(temp_74, temp_74, temp_80);
    // 0x000310: 0x5C69100000171A1A Fmul
    temp_82 = 0.0 - temp_76;
    temp_83 = temp_22 * temp_82;
    // 0x000318: 0x5080000000570000 Mufu
    temp_84 = inversesqrt(temp_81);
    // 0x000328: 0x5C69100000171212 Fmul
    temp_85 = 0.0 - temp_76;
    temp_86 = temp_43 * temp_85;
    // 0x000330: 0x5C69100000171C1C Fmul
    temp_87 = 0.0 - temp_76;
    temp_88 = temp_23 * temp_87;
    // 0x000338: 0x5C68100000070517 Fmul
    temp_89 = temp_72 * temp_84;
    // 0x000348: 0x5C68100000070919 Fmul
    temp_90 = temp_73 * temp_84;
    // 0x000350: 0x5C68100000070613 Fmul
    temp_91 = temp_74 * temp_84;
    // 0x000358: 0x5C68100001771A04 Fmul
    temp_92 = temp_83 * temp_89;
    // 0x000368: 0x5C62578001971706 Fmnmx
    temp_93 = abs(temp_89);
    temp_94 = abs(temp_90);
    temp_95 = max(temp_93, temp_94);
    // 0x000370: 0x59A0020001971205 Ffma
    temp_96 = fma(temp_86, temp_90, temp_92);
    // 0x000378: 0x5C60578000671306 Fmnmx
    temp_97 = abs(temp_91);
    temp_98 = max(temp_97, temp_95);
    // 0x000388: 0x5080000000470606 Mufu
    temp_99 = 1.0 / temp_98;
    // 0x000390: 0x59A4028001371C18 Ffma
    temp_100 = fma(temp_88, temp_91, temp_96);
    temp_101 = clamp(temp_100, 0.0, 1.0);
    // 0x000398: 0x5C68100001871701 Fmul
    temp_102 = temp_89 * temp_101;
    // 0x0003A8: 0x5C68100001871900 Fmul
    temp_103 = temp_90 * temp_101;
    // 0x0003B0: 0x5C68100001871305 Fmul
    temp_104 = temp_91 * temp_101;
    // 0x0003B8: 0x5C6810000067170E Fmul
    temp_105 = temp_89 * temp_99;
    // 0x0003C8: 0x5C6810000067190F Fmul
    temp_106 = temp_90 * temp_99;
    // 0x0003D0: 0x32A20D4000070101 Ffma
    temp_107 = 0.0 - temp_83;
    temp_108 = fma(temp_102, 2.0, temp_107);
    // 0x0003D8: 0x32A2094000070000 Ffma
    temp_109 = 0.0 - temp_86;
    temp_110 = fma(temp_103, 2.0, temp_109);
    // 0x0003E8: 0x32A20E4000070505 Ffma
    temp_111 = 0.0 - temp_88;
    temp_112 = fma(temp_104, 2.0, temp_111);
    // 0x0003F0: 0x5C69100000671314 Fmul
    temp_113 = 0.0 - temp_99;
    temp_114 = temp_91 * temp_113;
    // 0x0003F8: 0x5C62578000070104 Fmnmx
    temp_115 = abs(temp_108);
    temp_116 = abs(temp_110);
    temp_117 = max(temp_115, temp_116);
    // 0x000408: 0x5C98078001470006 Mov
    // 0x000410: 0x5C60578000470504 Fmnmx
    temp_118 = abs(temp_112);
    temp_119 = max(temp_118, temp_117);
    // 0x000418: 0x508000000047040B Mufu
    temp_120 = 1.0 / temp_119;
    // 0x000428: 0x5C98078000E70004 Mov
    // 0x000430: 0x5C68100000B70109 Fmul
    temp_121 = temp_108 * temp_120;
    // 0x000438: 0xE043FF904077FF01 Ipa
    temp_122 = in_attr8.y;
    // 0x000448: 0x5C68100000B7000A Fmul
    temp_123 = temp_110 * temp_120;
    // 0x000450: 0xE043FF900077FF00 Ipa
    temp_124 = in_attr8.x;
    // 0x000458: 0x5C69100000B7050B Fmul
    temp_125 = 0.0 - temp_120;
    temp_126 = temp_112 * temp_125;
    // 0x000468: 0x5C98078000F70005 Mov
    // 0x000470: 0xD9A2018151470E0E Texs
    temp_127 = textureLod(fp_t_tcb_18, vec3(temp_105, temp_106, temp_114), temp_70).xyz;
    temp_128 = temp_127.x;
    temp_129 = temp_127.y;
    temp_130 = temp_127.z;
    // 0x000478: 0xC1BA0143F2070808 Tex
    temp_131 = textureLod(fp_t_tcb_14, vec4(temp_121, temp_123, temp_126, float(1)), temp_71).xyz;
    temp_132 = temp_131.x;
    temp_133 = temp_131.y;
    temp_134 = temp_131.z;
    // 0x000488: 0xC0BA0163EFF70404 Tex
    temp_135 = textureLod(fp_t_tcb_16, vec3(temp_105, temp_106, temp_114), 0.0).xyz;
    temp_136 = temp_135.x;
    temp_137 = temp_135.y;
    temp_138 = temp_135.z;
    // 0x000490: 0xD8220201F1171010 Texs
    temp_139 = texture(fp_t_tcb_20, vec2(temp_78, temp_79)).xyz;
    temp_140 = temp_139.x;
    temp_141 = temp_139.y;
    temp_142 = temp_139.z;
    // 0x000498: 0xDEBA0000C1B70002 TexB
    temp_143 = texture(fp_t_cb7_20, vec3(temp_124, temp_122, temp_67)).x;
    // 0x0004A8: 0x4C58301805C71A21 Fadd
    temp_144 = 0.0 - fp_c6.data[23].x;
    temp_145 = temp_83 + temp_144;
    // 0x0004B0: 0x4C58301805D71222 Fadd
    temp_146 = 0.0 - fp_c6.data[23].y;
    temp_147 = temp_86 + temp_146;
    // 0x0004B8: 0x4C58301805E71C23 Fadd
    temp_148 = 0.0 - fp_c6.data[23].z;
    temp_149 = temp_88 + temp_148;
    // 0x0004C8: 0x385D103F80071616 Fadd
    temp_150 = 0.0 - temp_8;
    temp_151 = temp_150 + 1.0;
    temp_152 = clamp(temp_151, 0.0, 1.0);
    // 0x0004D0: 0x5C68100002172124 Fmul
    temp_153 = temp_145 * temp_145;
    // 0x0004D8: 0x59A0120002272224 Ffma
    temp_154 = fma(temp_147, temp_147, temp_153);
    // 0x0004E8: 0x59A0120002372324 Ffma
    temp_155 = fma(temp_149, temp_149, temp_154);
    // 0x0004F0: 0x5080000000572424 Mufu
    temp_156 = inversesqrt(temp_155);
    // 0x0004F8: 0x5C68100002472121 Fmul
    temp_157 = temp_145 * temp_156;
    // 0x000508: 0x5C6810000247220B Fmul
    temp_158 = temp_147 * temp_156;
    // 0x000510: 0x5C68100002171A20 Fmul
    temp_159 = temp_83 * temp_157;
    // 0x000518: 0x4C69101805C72114 Fmul
    temp_160 = 0.0 - fp_c6.data[23].x;
    temp_161 = temp_157 * temp_160;
    // 0x000528: 0x5C68100002171700 Fmul
    temp_162 = temp_89 * temp_157;
    // 0x000530: 0x5C68100002472301 Fmul
    temp_163 = temp_149 * temp_156;
    // 0x000538: 0x4C69101805C71717 Fmul
    temp_164 = 0.0 - fp_c6.data[23].x;
    temp_165 = temp_89 * temp_164;
    // 0x000548: 0x59A0100000B71212 Ffma
    temp_166 = fma(temp_86, temp_158, temp_159);
    // 0x000550: 0x49A10A1805D70B14 Ffma
    temp_167 = 0.0 - fp_c6.data[23].y;
    temp_168 = fma(temp_158, temp_167, temp_161);
    // 0x000558: 0x59A0000000B71900 Ffma
    temp_169 = fma(temp_90, temp_158, temp_162);
    // 0x000568: 0x01040DF760C7F020 Mov32i
    // 0x000570: 0x59A4090000171C0B Ffma
    temp_170 = fma(temp_88, temp_163, temp_166);
    temp_171 = clamp(temp_170, 0.0, 1.0);
    // 0x000578: 0x49A50A1805E7011A Ffma
    temp_172 = 0.0 - fp_c6.data[23].z;
    temp_173 = fma(temp_163, temp_172, temp_168);
    temp_174 = clamp(temp_173, 0.0, 1.0);
    // 0x000588: 0x59A4000000171300 Ffma
    temp_175 = fma(temp_91, temp_163, temp_169);
    temp_176 = clamp(temp_175, 0.0, 1.0);
    // 0x000590: 0x51A40F0400271E01 Ffma
    temp_177 = fma(temp_66, temp_66, fp_c1.data[0].z);
    temp_178 = clamp(temp_177, 0.0, 1.0);
    // 0x000598: 0x0103F0000007F014 Mov32i
    // 0x0005A8: 0x49A10B9805D7191C Ffma
    temp_179 = 0.0 - fp_c6.data[23].y;
    temp_180 = fma(temp_90, temp_179, temp_165);
    // 0x0005B0: 0x5C68100000170112 Fmul
    temp_181 = temp_178 * temp_178;
    // 0x0005B8: 0x32A00A3F00071E17 Ffma
    temp_182 = fma(temp_66, 0.5, 0.5);
    // 0x0005C8: 0x49A50E1805E71313 Ffma
    temp_183 = 0.0 - fp_c6.data[23].z;
    temp_184 = fma(temp_91, temp_183, temp_180);
    temp_185 = clamp(temp_184, 0.0, 1.0);
    // 0x0005D0: 0x3859103F80071E1E Fadd
    temp_186 = 0.0 - temp_66;
    temp_187 = temp_186 + 1.0;
    // 0x0005D8: 0x32A00A3F00071914 Ffma
    temp_188 = fma(temp_90, 0.5, 0.5);
    // 0x0005E8: 0x59A2000001270012 Ffma
    temp_189 = 0.0 - temp_176;
    temp_190 = fma(temp_176, temp_181, temp_189);
    // 0x0005F0: 0x5C68120001771721 Fmul
    temp_191 = temp_182 * 0.5;
    temp_192 = temp_191 * temp_182;
    // 0x0005F8: 0x4C98079800870017 Mov
    // 0x000608: 0x5C68100001E71E19 Fmul
    temp_193 = temp_187 * temp_187;
    // 0x000610: 0x4C9807980907001E Mov
    // 0x000618: 0x51A0090400970012 Ffma
    temp_194 = fma(temp_176, temp_190, fp_c1.data[2].y);
    // 0x000628: 0x49A2100400A71A00 Ffma
    temp_195 = fma(temp_174, fp_c1.data[2].z, -6.98316002);
    // 0x000630: 0x5080000000471212 Mufu
    temp_196 = 1.0 / temp_194;
    // 0x000638: 0x59A10C000217181B Ffma
    temp_197 = 0.0 - temp_192;
    temp_198 = fma(temp_101, temp_197, temp_101);
    // 0x000648: 0x59A109800217131C Ffma
    temp_199 = 0.0 - temp_192;
    temp_200 = fma(temp_185, temp_199, temp_185);
    // 0x000650: 0x49A2100400A70B20 Ffma
    temp_201 = fma(temp_171, fp_c1.data[2].z, -6.98316002);
    // 0x000658: 0x5C68100001971919 Fmul
    temp_202 = temp_193 * temp_193;
    // 0x000668: 0x4C59101800471717 Fadd
    temp_203 = 0.0 - fp_c6.data[2].x;
    temp_204 = temp_203 + fp_c6.data[1].x;
    // 0x000670: 0x5C68100000071A1A Fmul
    temp_205 = temp_174 * temp_195;
    // 0x000678: 0x5C58100001B7211B Fadd
    temp_206 = temp_192 + temp_198;
    // 0x000688: 0x5C58100001C7211C Fadd
    temp_207 = temp_192 + temp_200;
    // 0x000690: 0x5080000000471B1B Mufu
    temp_208 = 1.0 / temp_206;
    // 0x000698: 0x010410676C97F021 Mov32i
    // 0x0006A8: 0x5080000000471C1C Mufu
    temp_209 = 1.0 / temp_207;
    // 0x0006B0: 0x51A10F1809071800 Ffma
    temp_210 = 0.0 - fp_c6.data[36].x;
    temp_211 = fma(temp_101, temp_210, fp_c6.data[36].x);
    // 0x0006B8: 0x1E23E468DB97181E Fmul32i
    temp_212 = temp_101 * 0.193900004;
    // 0x0006C8: 0x5080400000370000 Mufu
    temp_213 = abs(temp_211);
    temp_214 = log2(temp_213);
    // 0x0006D0: 0x5C68100002070B0B Fmul
    temp_215 = temp_171 * temp_201;
    // 0x0006D8: 0x4C98079800A70020 Mov
    // 0x0006E8: 0x49A0108400071821 Ffma
    temp_216 = fma(temp_101, fp_c1.data[0].x, 8.40400028);
    // 0x0006F0: 0x5C68100001270101 Fmul
    temp_217 = temp_178 * temp_196;
    // 0x0006F8: 0x4C98079800970012 Mov
    // 0x000708: 0x49A00F040037191E Ffma
    temp_218 = fma(temp_202, fp_c1.data[0].w, temp_212);
    // 0x000710: 0x51A00A1800871717 Ffma
    temp_219 = fma(temp_204, temp_188, fp_c6.data[2].x);
    // 0x000718: 0x4C59101800672022 Fadd
    temp_220 = 0.0 - fp_c6.data[2].z;
    temp_221 = temp_220 + fp_c6.data[1].z;
    // 0x000728: 0x0103E2CD9E87F020 Mov32i
    // 0x000730: 0x51A0108400171821 Ffma
    temp_222 = fma(temp_101, temp_216, fp_c1.data[0].y);
    // 0x000738: 0x4C59101800571212 Fadd
    temp_223 = 0.0 - fp_c6.data[2].y;
    temp_224 = temp_223 + fp_c6.data[1].y;
    // 0x000748: 0x088BF05D63971E1E Fadd32i
    temp_225 = temp_218 + -0.522800028;
    // 0x000750: 0x5C68120001C71B1C Fmul
    temp_226 = temp_208 * 0.5;
    temp_227 = temp_226 * temp_209;
    // 0x000758: 0xE04BFF8F4077FF1B Ipa
    temp_228 = in_attr7.y;
    temp_229 = clamp(temp_228, 0.0, 1.0);
    // 0x000768: 0x4C68101809170023 Fmul
    temp_230 = temp_214 * fp_c6.data[36].y;
    // 0x000770: 0x49A2100400871920 Ffma
    temp_231 = fma(temp_202, fp_c1.data[2].x, -0.168799996);
    // 0x000778: 0x51A0108400471800 Ffma
    temp_232 = fma(temp_101, temp_222, fp_c1.data[1].x);
    // 0x000788: 0x51A00A1800971212 Ffma
    temp_233 = fma(temp_224, temp_188, fp_c6.data[2].y);
    // 0x000790: 0x5C68100001E71818 Fmul
    temp_234 = temp_101 * temp_225;
    // 0x000798: 0x0104066978D7F01E Mov32i
    // 0x0007A8: 0x51A00A1800A72214 Ffma
    temp_235 = fma(temp_221, temp_188, fp_c6.data[2].z);
    // 0x0007B0: 0x5C68100002071922 Fmul
    temp_236 = temp_202 * temp_231;
    // 0x0007B8: 0x5C90008002370023 Rro
    // 0x0007C8: 0x4C98079809A70020 Mov
    // 0x0007D0: 0x5C68100000170121 Fmul
    temp_237 = temp_217 * temp_217;
    // 0x0007D8: 0x49A20F040057191E Ffma
    temp_238 = fma(temp_202, fp_c1.data[1].y, -3.60299993);
    // 0x0007E8: 0x5C60138002270000 Fmnmx
    temp_239 = min(temp_232, temp_236);
    // 0x0007F0: 0x5084000000272322 Mufu
    temp_240 = exp2(temp_230);
    temp_241 = clamp(temp_240, 0.0, 1.0);
    // 0x0007F8: 0x4C58101408172020 Fadd
    temp_242 = fp_c6.data[38].z + fp_c5.data[32].y;
    // 0x000808: 0x5C68100002171C1C Fmul
    temp_243 = temp_227 * temp_237;
    // 0x000810: 0x51A00F040067191E Ffma
    temp_244 = fma(temp_202, temp_238, fp_c1.data[1].z);
    // 0x000818: 0x5C68100001C7131C Fmul
    temp_245 = temp_185 * temp_243;
    // 0x000828: 0x59A00C0001E71918 Ffma
    temp_246 = fma(temp_202, temp_244, temp_234);
    // 0x000830: 0x010404000007F01E Mov32i
    // 0x000838: 0x5C90008001A70019 Rro
    // 0x000848: 0x5C68100002272001 Fmul
    temp_247 = temp_242 * temp_241;
    // 0x000850: 0x5080000000271919 Mufu
    temp_248 = exp2(temp_205);
    // 0x000858: 0x5C90008000B7001A Rro
    // 0x000868: 0xF0F0000034470000 Depbar
    // 0x000870: 0x4C58301407B70D20 Fadd
    temp_249 = 0.0 - fp_c5.data[30].w;
    temp_250 = temp_11 + temp_249;
    // 0x000878: 0x5080000000271A1A Mufu
    temp_251 = exp2(temp_215);
    // 0x000888: 0x33A00F4000071B0B Ffma
    temp_252 = fma(temp_229, -2.0, 3.0);
    // 0x000890: 0x5C68100001B71B1E Fmul
    temp_253 = temp_229 * temp_229;
    // 0x000898: 0x51A0101407B7031B Ffma
    temp_254 = fma(temp_7, temp_250, fp_c5.data[30].w);
    // 0x0008A8: 0x4C58301407B71D20 Fadd
    temp_255 = 0.0 - fp_c5.data[30].w;
    temp_256 = temp_12 + temp_255;
    // 0x0008B0: 0x5C68100001E70B0B Fmul
    temp_257 = temp_252 * temp_253;
    // 0x0008B8: 0x59A10D0001A71B1E Ffma
    temp_258 = 0.0 - temp_251;
    temp_259 = fma(temp_254, temp_258, temp_251);
    // 0x0008C8: 0x4C68101803770B0B Fmul
    temp_260 = temp_257 * fp_c6.data[13].w;
    // 0x0008D0: 0xF0F0000034270000 Depbar
    // 0x0008D8: 0x49A0071808570808 Ffma
    temp_261 = fma(temp_132, fp_c6.data[33].y, temp_128);
    // 0x0008E8: 0x49A0030400C71406 Ffma
    temp_262 = fma(temp_235, fp_c1.data[3].x, temp_138);
    // 0x0008F0: 0x49A0020400C71704 Ffma
    temp_263 = fma(temp_219, fp_c1.data[3].x, temp_136);
    // 0x0008F8: 0x4C58301407B70C14 Fadd
    temp_264 = 0.0 - fp_c5.data[30].w;
    temp_265 = temp_10 + temp_264;
    // 0x000908: 0x49A0028400C71205 Ffma
    temp_266 = fma(temp_233, fp_c1.data[3].x, temp_137);
    // 0x000910: 0x4C68101801471317 Fmul
    temp_267 = temp_185 * fp_c6.data[5].x;
    // 0x000918: 0x59A10C8001971B0E Ffma
    temp_268 = 0.0 - temp_248;
    temp_269 = fma(temp_254, temp_268, temp_248);
    // 0x000928: 0x5C58100001E71B12 Fadd
    temp_270 = temp_254 + temp_259;
    // 0x000930: 0x4C58301407B70D1E Fadd
    temp_271 = 0.0 - fp_c5.data[30].w;
    temp_272 = temp_11 + temp_271;
    // 0x000938: 0x49A0079808570909 Ffma
    temp_273 = fma(temp_133, fp_c6.data[33].y, temp_129);
    // 0x000948: 0x51A00A1407B7030F Ffma
    temp_274 = fma(temp_7, temp_265, fp_c5.data[30].w);
    // 0x000950: 0x1E23EA2F98371714 Fmul32i
    temp_275 = temp_267 * 0.318309873;
    // 0x000958: 0x49A00A9808570A0A Ffma
    temp_276 = fma(temp_134, fp_c6.data[33].y, temp_130);
    // 0x000968: 0x5C58100000E71B0E Fadd
    temp_277 = temp_254 + temp_269;
    // 0x000970: 0x5C5C30000FF70017 Fadd
    temp_278 = temp_239 + -0.0;
    temp_279 = clamp(temp_278, 0.0, 1.0);
    // 0x000978: 0x4C68101801571315 Fmul
    temp_280 = temp_185 * fp_c6.data[5].y;
    // 0x000988: 0x4C6810180167131B Fmul
    temp_281 = temp_185 * fp_c6.data[5].z;
    // 0x000990: 0x51A00F1407B70300 Ffma
    temp_282 = fma(temp_7, temp_272, fp_c5.data[30].w);
    // 0x000998: 0x51A0101407B70313 Ffma
    temp_283 = fma(temp_7, temp_256, fp_c5.data[30].w);
    // 0x0009A8: 0x59A10D0001A70F21 Ffma
    temp_284 = 0.0 - temp_251;
    temp_285 = fma(temp_274, temp_284, temp_251);
    // 0x0009B0: 0x4C5C10040077181E Fadd
    temp_286 = temp_246 + fp_c1.data[1].w;
    temp_287 = clamp(temp_286, 0.0, 1.0);
    // 0x0009B8: 0x1E23EA2F98371518 Fmul32i
    temp_288 = temp_280 * 0.318309873;
    // 0x0009C8: 0x4C68101801570E0E Fmul
    temp_289 = temp_277 * fp_c6.data[5].y;
    // 0x0009D0: 0x386C104248070020 Fmul
    temp_290 = temp_282 * 50.0;
    temp_291 = clamp(temp_290, 0.0, 1.0);
    // 0x0009D8: 0x59A10D0001A71322 Ffma
    temp_292 = 0.0 - temp_251;
    temp_293 = fma(temp_283, temp_292, temp_251);
    // 0x0009E8: 0x1E23EA2F98371B1A Fmul32i
    temp_294 = temp_281 * 0.318309873;
    // 0x0009F0: 0x5C58100002170F1B Fadd
    temp_295 = temp_274 + temp_285;
    // 0x0009F8: 0x59A10C8001970F21 Ffma
    temp_296 = 0.0 - temp_248;
    temp_297 = fma(temp_274, temp_296, temp_248);
    // 0x000A08: 0x5C58300001771E15 Fadd
    temp_298 = 0.0 - temp_279;
    temp_299 = temp_287 + temp_298;
    // 0x000A10: 0x59A10C8001971319 Ffma
    temp_300 = 0.0 - temp_248;
    temp_301 = fma(temp_283, temp_300, temp_248);
    // 0x000A18: 0x5C6810000207171E Fmul
    temp_302 = temp_279 * temp_291;
    // 0x000A28: 0x5C58100002271323 Fadd
    temp_303 = temp_283 + temp_293;
    // 0x000A30: 0x59A10A0001471B14 Ffma
    temp_304 = 0.0 - temp_275;
    temp_305 = fma(temp_295, temp_304, temp_275);
    // 0x000A38: 0x5C58100002170F21 Fadd
    temp_306 = temp_274 + temp_297;
    // 0x000A48: 0x59A10C0001871217 Ffma
    temp_307 = 0.0 - temp_288;
    temp_308 = fma(temp_270, temp_307, temp_288);
    // 0x000A50: 0x5C58100001971319 Fadd
    temp_309 = temp_283 + temp_301;
    // 0x000A58: 0x59A00F0001570000 Ffma
    temp_310 = fma(temp_282, temp_299, temp_302);
    // 0x000A68: 0x59A00F0001571313 Ffma
    temp_311 = fma(temp_283, temp_299, temp_302);
    // 0x000A70: 0x59A00F0001570F0F Ffma
    temp_312 = fma(temp_274, temp_299, temp_302);
    // 0x000A78: 0x4C68101808C70115 Fmul
    temp_313 = temp_247 * fp_c6.data[35].x;
    // 0x000A88: 0x4C68101808D70118 Fmul
    temp_314 = temp_247 * fp_c6.data[35].y;
    // 0x000A90: 0x4C68101801472121 Fmul
    temp_315 = temp_306 * fp_c6.data[5].x;
    // 0x000A98: 0x4C68101808E70101 Fmul
    temp_316 = temp_247 * fp_c6.data[35].z;
    // 0x000AA8: 0x59A10D0001A72312 Ffma
    temp_317 = 0.0 - temp_294;
    temp_318 = fma(temp_303, temp_317, temp_294);
    // 0x000AB0: 0x5C68100000E71C0E Fmul
    temp_319 = temp_245 * temp_289;
    // 0x000AB8: 0x49A10A940827151E Ffma
    temp_320 = 0.0 - fp_c5.data[32].z;
    temp_321 = fma(temp_313, temp_320, temp_313);
    // 0x000AC8: 0x4C6810140827181B Fmul
    temp_322 = temp_314 * fp_c5.data[32].z;
    // 0x000AD0: 0x4C6810140827151A Fmul
    temp_323 = temp_313 * fp_c5.data[32].z;
    // 0x000AD8: 0x5C68100002171C21 Fmul
    temp_324 = temp_245 * temp_315;
    // 0x000AE8: 0x49A10C1408271815 Ffma
    temp_325 = 0.0 - fp_c5.data[32].z;
    temp_326 = fma(temp_314, temp_325, temp_314);
    // 0x000AF0: 0x4C68101408270118 Fmul
    temp_327 = temp_316 * fp_c5.data[32].z;
    // 0x000AF8: 0x5C58100001E7141E Fadd
    temp_328 = temp_305 + temp_321;
    // 0x000B08: 0xE043FF8F0077FF14 Ipa
    temp_329 = in_attr7.x;
    // 0x000B10: 0x4C68101801671919 Fmul
    temp_330 = temp_309 * fp_c6.data[5].z;
    // 0x000B18: 0xE043FF8C8077FF07 Ipa
    temp_331 = in_attr4.z;
    // 0x000B28: 0x49A1009408270101 Ffma
    temp_332 = 0.0 - fp_c5.data[32].z;
    temp_333 = fma(temp_316, temp_332, temp_316);
    // 0x000B30: 0x49A00D8400B70E0E Ffma
    temp_334 = fma(temp_319, fp_c1.data[2].w, temp_322);
    // 0x000B38: 0x49A00D0400B7211A Ffma
    temp_335 = fma(temp_324, fp_c1.data[2].w, temp_323);
    // 0x000B48: 0x5C58100001571717 Fadd
    temp_336 = temp_308 + temp_326;
    // 0x000B50: 0x5C58100000471E04 Fadd
    temp_337 = temp_328 + temp_263;
    // 0x000B58: 0x5C68100001971C19 Fmul
    temp_338 = temp_245 * temp_330;
    // 0x000B68: 0x5C58100000171201 Fadd
    temp_339 = temp_318 + temp_333;
    // 0x000B70: 0x59A0070000970000 Ffma
    temp_340 = fma(temp_310, temp_273, temp_334);
    // 0x000B78: 0x59A00D0000870F0F Ffma
    temp_341 = fma(temp_312, temp_261, temp_335);
    // 0x000B88: 0x49A20B180AC71608 Ffma
    temp_342 = 0.0 - temp_152;
    temp_343 = fma(temp_152, fp_c6.data[43].x, temp_342);
    // 0x000B90: 0x49A20B180AD71609 Ffma
    temp_344 = 0.0 - temp_152;
    temp_345 = fma(temp_152, fp_c6.data[43].y, temp_344);
    // 0x000B98: 0x5C58100000571705 Fadd
    temp_346 = temp_336 + temp_266;
    // 0x000BA8: 0x49A20B180AE71616 Ffma
    temp_347 = 0.0 - temp_152;
    temp_348 = fma(temp_152, fp_c6.data[43].z, temp_347);
    // 0x000BB0: 0x49A00C0400B71918 Ffma
    temp_349 = fma(temp_338, fp_c1.data[2].w, temp_327);
    // 0x000BB8: 0x5C58100000670101 Fadd
    temp_350 = temp_339 + temp_262;
    // 0x000BC8: 0x59A102000047030E Ffma
    temp_351 = 0.0 - temp_337;
    temp_352 = fma(temp_7, temp_351, temp_337);
    // 0x000BD0: 0x3858103F80070806 Fadd
    temp_353 = temp_343 + 1.0;
    // 0x000BD8: 0x59A1028000570312 Ffma
    temp_354 = 0.0 - temp_346;
    temp_355 = fma(temp_7, temp_354, temp_346);
    // 0x000BE8: 0x3858103F80071616 Fadd
    temp_356 = temp_348 + 1.0;
    // 0x000BF0: 0x59A00C0000A7130A Ffma
    temp_357 = fma(temp_311, temp_276, temp_349);
    // 0x000BF8: 0x3858103F80070904 Fadd
    temp_358 = temp_345 + 1.0;
    // 0x000C08: 0x59A1008000170303 Ffma
    temp_359 = 0.0 - temp_350;
    temp_360 = fma(temp_7, temp_359, temp_350);
    // 0x000C10: 0x59A0078000E70C0F Ffma
    temp_361 = fma(temp_10, temp_352, temp_341);
    // 0x000C18: 0x4C9807980B47000E Mov
    // 0x000C28: 0x59A4030000670C06 Ffma
    temp_362 = fma(temp_10, temp_353, temp_353);
    temp_363 = clamp(temp_362, 0.0, 1.0);
    // 0x000C30: 0x59A40B0001671D16 Ffma
    temp_364 = fma(temp_12, temp_356, temp_356);
    temp_365 = clamp(temp_364, 0.0, 1.0);
    // 0x000C38: 0x59A4020000470D01 Ffma
    temp_366 = fma(temp_11, temp_358, temp_358);
    temp_367 = clamp(temp_366, 0.0, 1.0);
    // 0x000C48: 0x59A0050000371D1D Ffma
    temp_368 = fma(temp_12, temp_360, temp_357);
    // 0x000C50: 0x59A0000001270D12 Ffma
    temp_369 = fma(temp_11, temp_355, temp_340);
    // 0x000C58: 0x4C98079802870003 Mov
    // 0x000C68: 0x51A207180B471010 Ffma
    temp_370 = 0.0 - fp_c6.data[45].x;
    temp_371 = fma(temp_140, fp_c6.data[45].x, temp_370);
    // 0x000C70: 0x4C98079802970004 Mov
    // 0x000C78: 0x51A207180B471111 Ffma
    temp_372 = 0.0 - fp_c6.data[45].x;
    temp_373 = fma(temp_141, fp_c6.data[45].x, temp_372);
    // 0x000C88: 0x49A50A180BC70214 Ffma
    temp_374 = 0.0 - fp_c6.data[47].x;
    temp_375 = fma(temp_143, temp_374, temp_329);
    temp_376 = clamp(temp_375, 0.0, 1.0);
    // 0x000C90: 0x5C68100000F70600 Fmul
    temp_377 = temp_363 * temp_361;
    // 0x000C98: 0x5080000000371414 Mufu
    temp_378 = log2(temp_376);
    // 0x000CA8: 0x51A207180B471F1F Ffma
    temp_379 = 0.0 - fp_c6.data[45].x;
    temp_380 = fma(temp_142, fp_c6.data[45].x, temp_379);
    // 0x000CB0: 0x4C98079802A70006 Mov
    // 0x000CB8: 0x5C68100001270101 Fmul
    temp_381 = temp_367 * temp_369;
    // 0x000CC8: 0x51A0019802871003 Ffma
    temp_382 = fma(temp_371, fp_c6.data[10].x, fp_c6.data[10].x);
    // 0x000CD0: 0x51A0021802971104 Ffma
    temp_383 = fma(temp_373, fp_c6.data[10].y, fp_c6.data[10].y);
    // 0x000CD8: 0x5C68100001D71602 Fmul
    temp_384 = temp_365 * temp_368;
    // 0x000CE8: 0x51A0031802A71F1F Ffma
    temp_385 = fma(temp_380, fp_c6.data[10].z, fp_c6.data[10].z);
    // 0x000CF0: 0x5C58300000370005 Fadd
    temp_386 = 0.0 - temp_382;
    temp_387 = temp_377 + temp_386;
    // 0x000CF8: 0x5C58300000470106 Fadd
    temp_388 = 0.0 - temp_383;
    temp_389 = temp_381 + temp_388;
    // 0x000D08: 0x4C68101803171409 Fmul
    temp_390 = temp_378 * fp_c6.data[12].y;
    // 0x000D10: 0x49A001980BF70508 Ffma
    temp_391 = fma(temp_387, fp_c6.data[47].w, temp_382);
    // 0x000D18: 0x49A002180BF70606 Ffma
    temp_392 = fma(temp_389, fp_c6.data[47].w, temp_383);
    // 0x000D28: 0x5C58300001F70205 Fadd
    temp_393 = 0.0 - temp_385;
    temp_394 = temp_384 + temp_393;
    // 0x000D30: 0x5C90008000970009 Rro
    // 0x000D38: 0x5080000000270909 Mufu
    temp_395 = exp2(temp_390);
    // 0x000D48: 0x5C60178000870308 Fmnmx
    temp_396 = max(temp_382, temp_391);
    // 0x000D50: 0x49A2059803470B03 Ffma
    temp_397 = 0.0 - temp_260;
    temp_398 = fma(temp_260, fp_c6.data[13].x, temp_397);
    // 0x000D58: 0x5C60178000670406 Fmnmx
    temp_399 = max(temp_383, temp_392);
    // 0x000D68: 0x49A00F980BF70505 Ffma
    temp_400 = fma(temp_394, fp_c6.data[47].w, temp_385);
    // 0x000D70: 0x49A2059803570B04 Ffma
    temp_401 = 0.0 - temp_260;
    temp_402 = fma(temp_260, fp_c6.data[13].y, temp_401);
    // 0x000D78: 0x49A2059803670B0B Ffma
    temp_403 = 0.0 - temp_260;
    temp_404 = fma(temp_260, fp_c6.data[13].z, temp_403);
    // 0x000D88: 0x59A0040000370803 Ffma
    temp_405 = fma(temp_396, temp_398, temp_396);
    // 0x000D90: 0x5C60178000571F05 Fmnmx
    temp_406 = max(temp_385, temp_400);
    // 0x000D98: 0x59A0030000470604 Ffma
    temp_407 = fma(temp_399, temp_402, temp_399);
    // 0x000DA8: 0x4C68101802B70906 Fmul
    temp_408 = temp_395 * fp_c6.data[10].w;
    // 0x000DB0: 0x5C59100000370003 Fadd
    temp_409 = 0.0 - temp_377;
    temp_410 = temp_409 + temp_405;
    // 0x000DB8: 0x59A0028000B70505 Ffma
    temp_411 = fma(temp_406, temp_404, temp_406);
    // 0x000DC8: 0x5C59100000470104 Fadd
    temp_412 = 0.0 - temp_381;
    temp_413 = temp_412 + temp_407;
    // 0x000DD0: 0x59A0000000670300 Ffma
    temp_414 = fma(temp_410, temp_408, temp_377);
    // 0x000DD8: 0x0103F8000007F003 Mov32i
    // 0x000DE8: 0x5C59100000570205 Fadd
    temp_415 = 0.0 - temp_384;
    temp_416 = temp_415 + temp_411;
    // 0x000DF0: 0x59A0008000670401 Ffma
    temp_417 = fma(temp_413, temp_408, temp_381);
    // 0x000DF8: 0x4C58100C03870704 Fadd
    temp_418 = temp_331 + fp_c3.data[14].x;
    // 0x000E08: 0x0103F8000007F007 Mov32i
    // 0x000E10: 0x59A0010000670502 Ffma
    temp_419 = fma(temp_416, temp_408, temp_384);
    // 0x000E18: 0x0103F6000007F005 Mov32i
    // 0x000E28: 0x5C9807800FF70006 Mov
    // 0x000E30: 0x49A37F8C03C70404 Ffma
    temp_420 = 0.0 - fp_c3.data[15].x;
    temp_421 = fma(temp_418, temp_420, -0.0);
    // 0x000E38: 0xE30000000007000F Exit
    out_attr0.x = temp_414;
    out_attr0.y = temp_417;
    out_attr0.z = temp_419;
    out_attr0.w = 1.0;
    out_attr1.x = temp_421;
    out_attr1.y = 0.875;
    out_attr1.z = 0.0;
    out_attr1.w = 1.0;
    return;
}
